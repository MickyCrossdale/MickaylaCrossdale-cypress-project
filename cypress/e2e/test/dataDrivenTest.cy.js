import Auth from '../page/login.page'
const dataDrivenData =  require('../pageobjects/dataDrivenData.page');
const { faker } = require('@faker-js/faker');
  

describe('Login', () => {
    for(const record of dataDrivenData){
        
        it('should attempt to Login the ${record.username}', async () => {
            await loginPage.login.open('https://www.saucedemo.com/');
            await loginPage.login(faker.name.firstName(), faker.name.lastName(), faker.internet.password(), faker.internet.confirmpassword(),faker.internet.email(undefined,undefined,'gmail.com',pass));
            await expect(loginPage.myAccountTitle).toBeExisting();
            await expect(SecurePage.myAccountTitle).toHaveTextContaining(
                'My Account');
            browser.debug();
        });
        
    }
    
})
