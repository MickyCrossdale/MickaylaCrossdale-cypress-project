/// <reference types="cypress" />
import c from '../page/checkoutInfo.page'

describe('Check Out Info', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should navigate to the check out info page',() =>{
        addToCartPage.addToCart('standard_user', 'secret_sauce')
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('be.visible')
        cy.get('#react-burger-menu-btn')

    })
        
})  