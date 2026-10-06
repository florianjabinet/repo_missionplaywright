import { test, expect } from "@playwright/test";
import {FormulaireInscription} from './POM_FormulaireInscription';


test('remplirformulaireok', async ({page}) =>{
    
    const inscription = new FormulaireInscription(page);
    await page.goto('https://practice.missionplaywright.fr/exercises/registration-form');
    await inscription.email.fill('florian.jabinet@gmail.com');
    await inscription.fullname.fill('Jabinet');
    await inscription.password.fill('Coucou2026@');
    await inscription.confirmpassword.fill('Coucou2026@');
    await inscription.terms.check();
    await inscription.validation.click();
    
    await expect(page.getByTestId('registration-success')).toBeVisible();

});