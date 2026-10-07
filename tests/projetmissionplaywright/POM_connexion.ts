import {Locator, Page} from '@playwright/test';

export class Authentification {
    btnconnexion:Locator;
    cnxmail:Locator;
    cnxpassword:Locator;
    validationcnx:Locator;

    constructor (private page : Page ) {
    this.btnconnexion = this.page.getByTestId('login-tab');
    this.cnxmail = this.page.getByTestId('login-email-input');
    this.cnxpassword = this.page.getByTestId('login-password-input');
    this.validationcnx = this.page.getByTestId('login-submit-button');
    }
    async Connexion (email : string, password : string) {
        await this.cnxmail.fill(email);
        await this.cnxpassword.fill(password);
        
    }
}

export class Inscription {
    btninscription:Locator;
    inscrnom:Locator;
    inscrmail:Locator;
    inscrpassword:Locator;
    inscrconfirmpassword:Locator;
    validationinscription:Locator;
    erreurmotpasse:Locator;

    constructor (private page : Page) {
    this.btninscription = this.page.getByTestId('signup-tab');
    this.inscrnom = this.page.getByTestId('signup-name-input');
    this.inscrmail = this.page.getByTestId('signup-email-input');
    this.inscrpassword = this.page.getByTestId('signup-password-input');
    this.inscrconfirmpassword = this.page.getByTestId('signup-confirm-password-input');
    this.validationinscription = this.page.getByTestId('signup-submit-button');
    this.erreurmotpasse = this.page.locator('#.text-destructive');
    }
    async Inscription (nom : string, mail : string, password : string, confirmpassword : string) {
        await this.inscrnom.fill(nom);
        await this.inscrmail.fill(mail);
        await this.inscrpassword.fill(password);
        await this.inscrconfirmpassword.fill(confirmpassword);
    }
}