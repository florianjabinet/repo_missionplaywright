// test à faire - ajouter un panier avant connexion, 
// vérifier le numéro incrémenté au panier
// se connecter et vérifier qu'il y a toujours 3 articles au panier
import {expect, test} from './fixtureprojet';
import { faker } from '@faker-js/faker';




let idproduct = faker.number.int({ min: 1, max: 9 });
const urlproduct = 'https://shop.missionplaywright.fr/product/';

test('AjoutPanier', async ({page, header, Ajoutpanier, authentification }) => {

await page.goto(`${urlproduct}${idproduct}`);

while (await page.locator('.text-destructive').isVisible()) {
        idproduct = idproduct + 1;
        await page.goto(`${urlproduct}${idproduct}`);
    }

await Ajoutpanier.btnajout.click();
await expect(page.getByTestId('cart-count')).toHaveText('1');
await Ajoutpanier.btnajout.click();
await expect(page.getByTestId('cart-count')).toHaveText('2');
await Ajoutpanier.btnajout.click();
await expect(page.getByTestId('cart-count')).toHaveText('3');

await header.btnconnexion.click();
await authentification.cnxmail.fill(process.env.EMAILFIX!);
await authentification.cnxpassword.fill(process.env.PASSWORDFIX!);
await authentification.validationcnx.click();

await expect(page.getByTestId('cart-count')).toHaveText('3');

});