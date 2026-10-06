import {test,expect} from '@playwright/test';

test('coche', async ({page}) => {
await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');

const Cases=await page.getByRole('checkbox').all();
let num=0
for (const Case of Cases) {
    await Case.check();
    await expect(Case).toBeChecked();
    num=num+1
    await expect(page.getByTestId('selection-count')).toContainText(`${num}`);

}

for (const Case of Cases) {
    await Case.uncheck();
    await expect(Case).not.toBeChecked();
    num=num-1
    await expect(page.getByTestId('selection-count')).toContainText(`${num}`);


}
});

test('toutselection', async ({page}) => {
await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');
await page.getByTestId('select-all').click();
const Cases=await page.getByRole('checkbox').all();

for (const Case of Cases) {
    await expect(Case).toBeChecked();
    }
});

test('toutdeselection', async ({page}) => {
await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');
await page.getByTestId('deselect-all').click();
const Cases=await page.getByRole('checkbox').all();

for (const Case of Cases) {
    await expect(Case).not.toBeChecked();
    }
});



test('validationvide', async ({page})=> {
await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');
await page.getByTestId('checkbox-submit').click();
await expect(page.getByTestId('checkbox-error')).toBeVisible();
});

test ('selectionmax', async ({page})=> {
await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');
let max=5;
let nbre=0;
const Cases=await page.getByRole('checkbox').all();

    for (const Case of Cases) {
        await Case.check();
        nbre=nbre+1;
        if (nbre === 5) {
        break;
    }
        }

await page.getByTestId('checkbox-submit').click();
await expect(page.getByTestId('checkbox-error')).toBeVisible();
await page.getByRole('checkbox').first().uncheck();
await page.getByTestId('checkbox-submit').click();
await expect(page.getByTestId('checkbox-success')).toBeVisible();
});



test('textvalidation', async ({page}) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/checkboxes');
    let valeur = '';
    const Cases = await page.getByRole('checkbox').all();

    for (const Case of Cases) {
        await Case.check();
        await expect(Case).toBeChecked();
        valeur = await Case.locator('xpath=following-sibling::label').textContent();
        await page.getByTestId('checkbox-submit').click();
        await expect(page.getByTestId('checkbox-success')).toContainText(valeur);
        await Case.uncheck();
    }
});


