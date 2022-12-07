class checkoutInfo {

    get usernameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }
    get addtocartBtn() { return ('[name="add-to-cart-sauce-labs-bike-light"]') }
    get cartIconBtn() { return ('[class="shopping_cart_container"]') }
    get burgerBar() { return ('#react-burger-menu-btn')}
    get logoutBtn() { return ('logout_sidebar_link')}


    checkoutInfo(username, password) {
        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
        cy.get(this.addtocartBtn).click();
        cy.get(this.cartIconBtn).click();
    }
    
       
}
export default new checkoutInfo()