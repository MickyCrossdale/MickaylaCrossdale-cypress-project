/// <reference types="cypress" />
import addToCartPage from '../page/addToCart.page'
import Auth from '../page/login.page'
import checkoutInformationPage from '../page/checkoutInformation.page'
import checkoutPage from '../page/checkout.page'
import checkoutNoPostalCodePage from '../page/checkoutNoPostalCode.page'



describe('Add To Cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should add an Item to cart', () => {
        addToCartPage.addToCart('standard_user', 'secret_sauce')
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('be.visible')
        cy.get('#react-burger-menu-btn')

    })

    
    it('Should checkout with multiple items in cart', () => {
        Auth.login('standard_user', 'secret_sauce')
        checkoutPage.checkout('Mickayla', 'Crossdale', 'JMACE25')
        cy.get('.complete-header').should('be.visible')


    })

    it('Should have a single item in cart', () => {
        Auth.login('standard_user', 'secret_sauce')
        checkoutPage.checkoutSingle()
        cy.get('.inventory_item_name').should('be.visible')


    })

    it('Should have multiple items in cart overview', () => {
        Auth.login('standard_user', 'secret_sauce')
        checkoutPage.checkoutOverview('Mickayla', 'Crossdale', 'JMACE25')
        cy.get('.inventory_item_name').should('be.visible')


    })

    it('Should add multiple items to cart', () => {
        Auth.login('standard_user', 'secret_sauce')
        checkoutPage.checkoutMultipleData('Mickayla', 'Crossdale', 'JMACE25')
        cy.get('.summary_total_label').should('have.text','82.05')


    })

//NEGATIVE TESTS
    it('Should not checkout without inserting checkout information', () => {
        Auth.login('standard_user', 'secret_sauce')
        checkoutInformationPage.checkoutInformation()
        cy.get('.error-message-container.error').should('be.visible')


    })

    it('Should not checkout without inserting Postal Code', () => {
        Auth.login('standard_user', 'secret_sauce')
        checkoutNoPostalCodePage.checkoutNoPostalCode('Mickayla','Crossdale')
        cy.get('.error-message-container.error').should('be.visible')


    })



})




