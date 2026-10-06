import {test, expect} from '@playwright/test';
test ('title1', async ({page}) => {
await page.goto('https://practice.missionplaywright.fr/exercises/login-form');
await page.getByTestId('login-email').fill('test@exemple.com');
await expect(page.getByTestId('login-email')).toHaveValue('test@exemple.com');
});