import { Locator, Page } from '@playwright/test';




export class Article {

btnajout:Locator;
article:Locator;

constructor (private page : Page ) {
this.btnajout=this.page.getByTestId('product-detail-add-to-cart');
this.article=this.page.getByTestId('product-cart-');
}

}
