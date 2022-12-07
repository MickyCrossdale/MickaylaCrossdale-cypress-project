/// <reference types="cypress" />
import Auth from '../page/login.page'
import removeItemProductListPage from '../page/removeItemProductList.page'

describe('Remove from Product List', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should remove an Item from Product List', () => {
        Auth.login('standard_user', 'secret_sauce')
        removeItemProductListPage.removeFromProductList('Mickayla', 'Crossdale', 'JMACE25')
        cy.get('.title').should('be.visible')

    })


})


