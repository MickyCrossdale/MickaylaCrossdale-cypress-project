/// <reference types="cypress" />

describe.skip('SwagLabs', () => {

    it('Should login with valid credentials',() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click()
    
    })
    
    it.only('Should remove one item from cart', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click()
        cy.get('[name=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[class=shopping_cart_badge]').click();
        cy.get('inventory_item_name').should('not.exist')
        cy.get('.removed_cart_item').should('exist')
    });
    
    it.only('Should remove a product from cart', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click()
        cy.get('[name=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[id=remove-sauce-labs-backpack]').click();
        
    })
    
    })
    