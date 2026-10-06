import {test,expect} from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('https://practice.missionplaywright.fr/exercises/select-dropdowns')});

test('playwright-java', async ({page}) => {

await page.getByTestId('select-framework').selectOption('Playwright');
await page.getByTestId('select-languages').selectOption('Java');
await page.getByTestId('select-level').click();
await page.getByTestId('level-option-intermediaire').click();

await page.getByTestId('select-submit').click();
await expect(page.getByTestId('error-languages')).toBeVisible();
});


test('selectionvide', async ({page}) => {

await page.getByTestId('select-submit').click();
await expect(page.getByTestId('error-framework')).toBeVisible();
await expect(page.getByTestId('error-languages')).toBeVisible();
await expect(page.getByTestId('error-level')).toBeVisible();
});
