import { Page } from '@playwright/test';


export class FormulaireInscription {
    constructor(private page : Page) {}
    fullname = this.page.getByTestId('registration-name');
    email = this.page.getByTestId('registration-email');
    password = this.page.getByTestId('registration-password');
    confirmpassword = this.page.getByTestId('registration-confirmPassword');
    terms = this.page.getByTestId('registration-terms');
    validation = this.page.getByTestId('registration-submit');
    erreurpswd = this.page.getByTestId('registration-confirmPassword-error');
    async RemplirFormulaire (nom : string, mail : string, password : string, confirmPassword : string) {
        await this.fullname.fill(nom);
        await this.email.fill(mail);
        await this.password.fill(password);
        await this.confirmpassword.fill(confirmPassword);

    }


}
