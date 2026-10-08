import process from 'process';
import {expect, test} from './fixtureprojet';
import { faker } from '@faker-js/faker';


const fakenom = faker.person.fullName();
const fakemail = faker.internet.email();


test('creationcompte', async ({page, header, InscriptionUser}) => {
  
    await page.goto(process.env.URL!);
    await header.btnconnexion.click();
    await InscriptionUser.btninscription.click();
    await InscriptionUser.inscrnom.fill(fakenom);
    await InscriptionUser.inscrmail.fill(fakemail);
    await InscriptionUser.inscrpassword.fill('Passwordtest123&');
    await InscriptionUser.inscrconfirmpassword.fill('Passwordtest123&');
    // création de constante pour vérifier le code 200 de la requête du site après une création en succès
    const responsePromise = page.waitForResponse(
    (resp) => resp.url().includes('/auth/v1/signup') && resp.request().method() === 'POST'
);

await InscriptionUser.validationinscription.click();
// vérification du code 200 une fois la validation effectuée
const response = await responsePromise;
expect(response.status()).toBe(200);

await expect(page.locator('#div.gap-1:nth-child(1) > div:nth-child(1)')).toBeVisible;

});
