class removeFromCart {

   
    get addProduct() { return ('#add-to-cart-sauce-labs-backpack') }
    get shoppingCarttBtn() { return ('[class="shopping_cart_container"]')}
    get removeFromcartBtn() { return ('#remove-sauce-labs-backpack')}
    get continueShoppingBtn() { return ('#continue-shopping')}
    get successMessage() { return ('.title')}
   

    removeFromCart() {
        cy.get(this.addProduct).click()
        cy.get(this.shoppingCarttBtn).click()
        cy.get(this.removeFromcartBtn).click()
        cy.get(this.continueShoppingBtn).click()
       
       
        
    }
       
}
export default new removeFromCart()