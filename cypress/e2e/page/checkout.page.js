class checkout {

    
    get fleecejacketBtn() { return ('#add-to-cart-sauce-labs-fleece-jacket')}
    get bikelightBtn() { return ('#add-to-cart-sauce-labs-bike-light')}
    get boltTshirtBtn() { return ('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get shoppingCarttBtn() { return ('[class="shopping_cart_container"]')}
    get checkoutBtn() { return ('#checkout')}
    get firstnameBar() { return ('#first-name')}
    get lastNameBar() { return ('#last-name')}
    get postalCodeBar() { return ('#postal-code')}
    get continueBtn() { return ('#continue')}
    get finishBtn() { return('#finish')}
    get successMessage() { return('.complete-header')}


    checkout(firstname, lastname, postalcode) {
        cy.get(this.fleecejacketBtn).click();
        cy.get(this.bikelightBtn).click();
        cy.get(this.boltTshirtBtn).click();
        cy.get(this.shoppingCarttBtn).click();
        cy.get(this.checkoutBtn).click();
        cy.get(this.firstnameBar).type(firstname);
        cy.get(this.lastNameBar).type(lastname);
        cy.get(this.postalCodeBar).type(postalcode);
        cy.get(this.continueBtn).click();
        cy.get(this.finishBtn).click();
       
    }
    checkoutSingle() {
        cy.get(this.fleecejacketBtn).click();
        cy.get(this.shoppingCarttBtn).click(); 
       
    }

    checkoutOverview(firstname, lastname, postalcode) {
        cy.get(this.fleecejacketBtn).click();
        cy.get(this.bikelightBtn).click();
        cy.get(this.boltTshirtBtn).click();
        cy.get(this.shoppingCarttBtn).click();
        cy.get(this.checkoutBtn).click();
        cy.get(this.firstnameBar).type(firstname);
        cy.get(this.lastNameBar).type(lastname);
        cy.get(this.postalCodeBar).type(postalcode);
        cy.get(this.continueBtn).click();
    }
    checkoutMultipleData(firstname, lastname, postalcode) {
        cy.get(this.fleecejacketBtn).click();
        cy.get(this.bikelightBtn).click();
        cy.get(this.boltTshirtBtn).click();
        cy.get(this.shoppingCarttBtn).click();
        cy.get(this.checkoutBtn).click();
        cy.get(this.firstnameBar).type(firstname);
        cy.get(this.lastNameBar).type(lastname);
        cy.get(this.postalCodeBar).type(postalcode);
        cy.get(this.continueBtn).click();
    }
       
}
export default new checkout()