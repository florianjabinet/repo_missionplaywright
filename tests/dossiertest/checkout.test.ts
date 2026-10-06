import { expect, test } from "@playwright/test";
import { checkout } from "./checkout";
import { connexion } from "./connexionmissionplaywright";


test ('shippingok', async ({page})=> {



    const shipping = new checkout(page);
    const connect=new connexion(page);
    await page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
    await connect.btnconnexion.click();
    await expect(connect.email).toBeVisible();
    await connect.email.fill('florian.jabinet@gmail.com');
    await connect.password.fill('Playwright2026@');
    await connect.connexion.click();
    await expect(page.getByTestId('account-name')).toBeVisible({ timeout: 20000});
    
    await page.goto('https://practice.missionplaywright.fr/exercises/checkout-form');
   
    await expect(shipping.name).toBeVisible();

    await shipping.name.fill('jabinet');
    await shipping.adress.fill('63 r blance');
    await shipping.city.fill('Paris');
    await shipping.postal.fill('75015');
    await shipping.validation.click();
    await expect(shipping.card).toBeVisible();


});