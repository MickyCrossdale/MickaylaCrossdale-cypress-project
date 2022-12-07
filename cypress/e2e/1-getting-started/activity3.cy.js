/// <reference types="cypress" />

describe.skip('SwagLabs', () => {

it('Should login with valid credentials',() =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click()

})

it('Should add to Cart', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click()
    cy.get('[name=add-to-cart-sauce-labs-backpack]').click();
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






