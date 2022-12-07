class removeFromProductList {

    
    get boltTshirtBtn() { return ('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get shoppingCarttBtn() { return ('[class="shopping_cart_container"]')}
    get checkoutBtn() { return ('#checkout')}
    get firstnameBar() { return ('#first-name')}
    get lastNameBar() { return ('#last-name')}
    get postalCodeBar() { return ('#postal-code')}
    get cancelBtn() { return ('#cancel')}
    get removeAddToCartBtn() { return ('#remove-sauce-labs-bolt-t-shirt')}
    get itemName() { return ('.title')}


    removeFromProductList (firstname, lastname, postalcode) {
        cy.get(this.boltTshirtBtn).click();
        cy.get(this.shoppingCarttBtn).click();
        cy.get(this.checkoutBtn).click();
        cy.get(this.firstnameBar).type(firstname);
        cy.get(this.lastNameBar).type(lastname);
        cy.get(this.postalCodeBar).type(postalcode);
        cy.get(this.cancelBtn).click()
        cy.get(this.removeAddToCartBtn).click()
    }
    
       
}
export default new removeFromProductList ()