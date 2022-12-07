/// <reference types="cypress" />
import Auth from '../page/login.page'
import removeFromCartPage from '../page/removeFromCart.page'


describe('Remove Item from Cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should remove an Item to cart', () => {
        Auth.login('standard_user', 'secret_sauce')
        removeFromCartPage.removeFromCart()
        cy.get('.title').should('be.visible')
        

    })


})





