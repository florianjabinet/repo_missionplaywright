import {test,expect} from '@playwright/test';

test ('encore', async ({page}) => {
await page.goto('http://www.google.com');
await page.locator('#W0wltc > div').click();
await page.locator('#ti6dpd').fill('coucou');
await page.locator('#ti6dpd').fill('coucou');
await expect(page.locator('#ti6dpd')).toHaveValue('coucou');
await page.getByRole('button', {name: 'Recherche Google'}).isVisible;
await page.getByRole('button', { name: 'Recherche Google' }).first().click();






});