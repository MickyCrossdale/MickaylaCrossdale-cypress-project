class checkoutNoPostalCode {

    
    get fleecejacketBtn() { return ('#add-to-cart-sauce-labs-fleece-jacket')}
    get bikelightBtn() { return ('#add-to-cart-sauce-labs-bike-light')}
    get boltTshirtBtn() { return ('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get shoppingCarttBtn() { return ('[class="shopping_cart_container"]')}
    get checkoutBtn() { return ('#checkout')}
    get firstnameBar() { return ('#first-name')}
    get lastNameBar() { return ('#last-name')}
    get continueBtn() { return ('#continue')}
    get errorMessage() { return('.error-message-container.error')}


    checkoutNoPostalCode(firstname, lastname) {
        cy.get(this.fleecejacketBtn).click();
        cy.get(this.bikelightBtn).click();
        cy.get(this.boltTshirtBtn).click();
        cy.get(this.shoppingCarttBtn).click();
        cy.get(this.checkoutBtn).click();
        cy.get(this.firstnameBar).type(firstname);
        cy.get(this.lastNameBar).type(lastname);
        cy.get(this.continueBtn).click();
       
    }

}

export default new  checkoutNoPostalCode()