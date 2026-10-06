import {expect, test} from './fixture1';

test('inscriptionKO', async ({inscription}) => {
    
     await inscription.fullname.fill('florian');
     await inscription.email.fill("florian.jabinet@mail.com");
     await inscription.password.fill('coucou2026');
     await inscription.confirmpassword.fill('coucou2025');
     await inscription.terms.check();
     await inscription.validation.click();
    await expect(inscription.erreurpswd).toBeVisible();
});
