/// <reference types="cypress" />

describe.skip('IPO', () => {

    it.only('Should login with valid credentials',() =>{
        cy.visit('https://jmmbipo-st-portal.jmmb.com/')
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(6)').type('Login');
        cy.get('#input-105').type('HoratioG');
        cy.get('#input-109').type('Password@1');
        cy.get('button[type= submit] span[class= v-btn__content]').click();
    
    });
    
    })