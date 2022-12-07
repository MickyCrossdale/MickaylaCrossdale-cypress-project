/// <reference types="cypress" />
import Auth from '../page/login.page'

describe('Filter', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should sort product list from A-Z', () => {
        Auth.login('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('az')

        var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productList.sort()

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })

    })

    it('should sort product list from Z-A', () => {
        Auth.login('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('za')

        var productList =  ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productList.sort().reverse()
       

        cy.get('.inventory_item_name').each(($elem, index) => {
            expect($elem.text()).equal(productList[index])
        })
    })

    it('should sort product list from low-high', () => {
        Auth.login('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('lohi')

        var productPrice =  [29.99, 9.99, 15.99,49.99,7.99,15.99]
        productPrice.sort()

        cy.get('.inventory_item_price').each(($elem, index) => {
            expect($elem.text().replace('$','')).equal(productPrice[index])
        })
    })

  

    it('should sort product list from high-low', () => {
        Auth.login('standard_user','secret_sauce')
        cy.get('.product_sort_container').select('hilo')

        var productPrice =  [29.99, 9.99,15.99,49.99,7.99,15.99]
        productPrice.sort().reverse()

        cy.get('.inventory_item_price').each(($elem, index) => {
            expect($elem.text().replace('$','')).equal(productPrice[index])
        })
    })
})  