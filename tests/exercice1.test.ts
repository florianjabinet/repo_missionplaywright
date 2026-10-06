import {test, expect} from '@playwright/test';

test('caspassant', async ({page}) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/login-form');

await page.getByTestId('login-email').fill('test@example.com');
await page.getByTestId('login-password').fill('password123');
await page.getByTestId('login-submit').click();
await expect(page.getByTestId('login-success-message')).toBeVisible();

});

test('identifiantnonval', async ({page}) => {
    let  vallogin ='test@example.fr';
    let valpswd='password123';
    await page.goto('https://practice.missionplaywright.fr/exercises/login-form');

await page.getByTestId('login-email').fill(vallogin);
await page.getByTestId('login-password').fill(valpswd);
await page.getByTestId('login-submit').click();

await expect(page.getByTestId('login-success-message')).toBeHidden();
await expect(page.getByTestId('login-error-message')).toBeVisible();

vallogin='';
valpswd='';
await page.getByTestId('login-email').fill(vallogin);
await page.getByTestId('login-password').fill(valpswd);
await page.getByTestId('login-submit').click();
await expect(page.getByTestId('login-email-error')).toBeVisible();
await expect(page.getByTestId('login-email-error')).toHaveText('Email is required');
await expect(page.getByTestId('login-email-error')).toBeVisible();
await expect(page.getByTestId('login-password-error')).toHaveText('Password is required');


});


test('chargmt', async ({page}) => {
    let  vallogin ='test@example.com';
    let valpswd='password123';
    await page.goto('https://practice.missionplaywright.fr/exercises/login-form');

await page.getByTestId('login-email').fill(vallogin);
await page.getByTestId('login-password').fill(valpswd);
await page.getByTestId('login-submit').click();
await expect(page.getByTestId('login-submit')).toBeDisabled();

});

test('tab', async ({page}) => {
    await page.goto('https://practice.missionplaywright.fr/exercises/login-form');

await page.getByTestId('login-email').fill('test@example.com');
await page.getByTestId('login-email').press('Tab');
await expect(page.getByTestId('login-password')).toBeFocused();
await expect(page.getByTestId('login-password')).toHaveAttribute('type','password');


});