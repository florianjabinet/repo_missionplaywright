import {page} from '@playwright/test';

export class checkout {
    constructor (private Page : page) {}
    name = this.Page.getByTestId('checkout-name');
    adress = this.Page.getByTestId('checkout-address');
    city = this.Page.getByTestId('checkout-city');
    validation = this.Page.getByTestId('checkout-next');
    postal = this.Page.getByTestId('checkout-zip');

    card = this.Page.getByTestId('checkout-card');
    expiry=this.Page.getByTestId('checkout-expiry');
    cvv=this.Page.getByTestId('checkout-vvv');

    async shipping (nom : string, adresse : string, ville : string, codepostal : number) {
        await this.name.fill(nom);
        await this.adress.fill(adresse);
        await this.city.fill(ville);
        await this.postal.fill(codepostal);
        await this.validation.click();
        
    }

    async datacard (numerocard : number, expiration : string, codevv : number) {
        await this.card.fill(numerocard);
        await this.expiry.fill(expiration);
        await this.cvv.fill(codevv);
        await this.validation.click();    }

    
    }
    
