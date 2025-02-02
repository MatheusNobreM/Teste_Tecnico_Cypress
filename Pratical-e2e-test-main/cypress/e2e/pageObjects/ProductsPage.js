import ProductsElements from "../elements/ProductsElements"

const productsElements = new ProductsElements

class ProductsPage{
    AddCart(){
        cy.get(productsElements.TagProdut()).click()
        cy.get(productsElements.AddCartBtn()).click()
    }

    CheckingIfAddCart(){
        cy.get(productsElements.RemoveCartBtn()).should('contain', 'Remove')
        cy.get(productsElements.BadgeCart()).should('contain', '1')
        cy.get(productsElements.LinkCart()).click()
        cy.get(productsElements.TagName()).should('contain', 'Sauce Labs Backpack')
    }

    FilterHighLow(){
        cy.get(productsElements.Filter()).select('Price (high to low)')
    }

    CheckingIfHighLow(){
        cy.get(productsElements.Filter()).should('contain', 'Price (high to low)')
    }

    FilterLowHigh(){
        cy.get(productsElements.Filter()).select('Price (low to high)')
    }

    CheckingIfLowHigh(){
        cy.get(productsElements.Filter()).should('contain', 'Price (low to high)')
    }
}
export default ProductsPage