import {page} from '@playwright/test';

export class connexion {
    constructor(private page : Page) {}
    btnconnexion = this.page.getByTestId('login-link');
    email = this.page.getByTestId('login-email');
    password=this.page.getByTestId('login-password');
    connexion = this.page.getByTestId('login-submit');

    async seconnecter (mail : string, motpasse : string) {
        await this.btnconnexion.click();
        await this.email.fill(mail);
        await this.password.fill(motpasse);
        
    }


};