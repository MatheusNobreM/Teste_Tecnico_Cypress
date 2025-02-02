import { users, url } from './Mock';
import { doSignIn } from './Utils';
import ProductsPage from '../pageObjects/ProductsPage';

const productsPage = new ProductsPage

describe('Inventory - Products', () => {
  beforeEach(() => {
    cy.visit(url);

    doSignIn(users.standard_user);
  });

  it('#1 Should see the product details and add to cart', () => {
    productsPage.AddCart()
    productsPage.CheckingIfAddCart()
  });

  it('#2 Should sort products by price properly (high to low)', () => {
    cy.wait(2000)
    productsPage.FilterHighLow()
    productsPage.CheckingIfHighLow()
  });

  it('#3 Should sort products by price properly (low to high)', () => {
    cy.wait(2000)
    productsPage.FilterLowHigh()
    productsPage.CheckingIfLowHigh()
  });
  
});
