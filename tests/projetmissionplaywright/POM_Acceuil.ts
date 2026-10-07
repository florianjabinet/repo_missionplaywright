import {Locator, Page} from '@playwright/test';

export class Header {

readonly btnconnexion:Locator;
readonly accespanier:Locator;
readonly recherche:Locator;
readonly liencontact:Locator;
readonly lienapropos:Locator;
readonly lienproduits:Locator;
readonly lienacceuil:Locator;
readonly logo:Locator;

    constructor (private page : Page ) {
    this.btnconnexion =  this.page.getByTestId('login-button');
    this.accespanier = this.page.getByTestId('cart-button');
    this.recherche = this.page.getByTestId('search-button');
    this.liencontact = this.page.getByTestId('nav-link-contact');
    this.lienapropos = this.page.getByTestId('nav-link-about');
    this.lienproduits = this.page.getByTestId('nav-link-products');
    this.lienacceuil = this.page.getByTestId('nav-link-home');
    this.logo = this.page.getByTestId('nav-link-logo');

    }
}

