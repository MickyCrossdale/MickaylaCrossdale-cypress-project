/// <reference types="cypress" />
import checkoutPage from '../page/checkout.page'

describe('CheckOut Information', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should navigate to the checkout info page',() =>{
        checkoutPage.checkout('standard_user', 'secret_sauce')
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
        cy.get('#shopping_cart_container').click();


    }) 



        
})  




