import { users, url } from "./Mock";
import { doSignIn } from "./Utils";
import CheckoutPage from "../pageObjects/CheckoutPage";

const checkoutPage = new CheckoutPage

describe("Inventory - Products", () => {
  beforeEach(() => {
    cy.visit(url);

    doSignIn(users.standard_user);    
  });

  it("#1 Should do checkout with the correct flow", () => {
    checkoutPage.Checkout()
    checkoutPage.Register()
    checkoutPage.CheckoutSuccessful()
  });

  it("#2 Should select some products, go to cart, and go back to continue shopping", () => {
    checkoutPage.AddItem()
    checkoutPage.ContinueShopping()
  });

  it("#3 Should not continue checkout with empty delivery information", () => {
    checkoutPage.AddItem()
    checkoutPage.ContinueShopping()
    checkoutPage.CheckoutEmpty()
  });
});