import CheckoutElements from "../elements/CheckoutElements"

const checkoutElements = new CheckoutElements

class CheckoutPage{
    Checkout(){
        cy.get(checkoutElements.LinkCart()).click()
        cy.get(checkoutElements.Check()).click()
    }

    Register(){
        cy.get(checkoutElements.FirstName()).type('Matheus')
        cy.get(checkoutElements.LastName()).type('Moreira')
        cy.get(checkoutElements.PostalCode()).type('63902106')

        cy.get(checkoutElements.ContinueBtn()).click()
        cy.get(checkoutElements.Overview()).should('contain', 'Checkout: Overview')
        cy.get(checkoutElements.FinishBtn()).click()
    }

    CheckoutSuccessful(){
        cy.get(checkoutElements.CompleteHeader()).should('contain', 'Thank you for your order!')
        cy.get(checkoutElements.BackHomeBtn()).click()
        cy.contains('Products').should('be.visible');
    }

    AddItem(){
        cy.get(checkoutElements.AddItem1()).click()
        cy.get(checkoutElements.AddItem2()).click()
        cy.get(checkoutElements.AddItem3()).click()
        cy.get(checkoutElements.LinkCart()).click()
    }

    ContinueShopping(){
        cy.get(checkoutElements.ContinueShoppingBtn()).click()
        cy.get(checkoutElements.AddItem4()).click()
        cy.get(checkoutElements.LinkCart()).click()
        cy.get(checkoutElements.BadgeCart()).should('contain', '4')
    }

    CheckoutEmpty(){
        this.Checkout()
        cy.get(checkoutElements.ContinueBtn()).click()
        cy.get(checkoutElements.MsgError()).should('contain', 'Error: First Name is required')
    }
}
export default CheckoutPage