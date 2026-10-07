import { Locator, Page } from '@playwright/test';


export class FormulaireInscription {
    
    fullname:Locator;
    email:Locator;
    password:Locator;
    confirmpassword:Locator;
    terms:Locator;
    validation:Locator;
    erreurpswd:Locator;
    
    constructor(private page : Page) {
        this.page = page;
    this.fullname = this.page.getByTestId('registration-name');
    this.email = this.page.getByTestId('registration-email');
    this.password = this.page.getByTestId('registration-password');
    this.confirmpassword = this.page.getByTestId('registration-confirmPassword');
    this.terms = this.page.getByTestId('registration-terms');
    this.validation = this.page.getByTestId('registration-submit');
    this.erreurpswd = this.page.getByTestId('registration-confirmPassword-error');
    }
    async RemplirFormulaire (nom : string, mail : string, password : string, confirmPassword : string) {
        await this.fullname.fill(nom);
        await this.email.fill(mail);
        await this.password.fill(password);
        await this.confirmpassword.fill(confirmPassword);

    }


}
