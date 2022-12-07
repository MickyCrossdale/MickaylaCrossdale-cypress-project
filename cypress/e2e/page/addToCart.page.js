class addToCart {

    get usernameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }
    get addtocartBtn() { return ('#add-to-cart-sauce-labs-backpack') }
    get burgerBar() { return ('#react-burger-menu-btn')}
    get logoutBtn() { return ('logout_sidebar_link')}


    addToCart(username, password) {
        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
        cy.get(this.addtocartBtn).click();
    }
    
       
}
export default new addToCart()