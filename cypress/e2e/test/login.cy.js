/// <reference types="cypress" />
import Auth from '../page/login.page'

describe('login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should login with valid credentials',() =>{
        Auth.login('standard_user', 'secret_sauce')
        cy.get('.inventory_item_name').should('be.visible')

    })

        
})  