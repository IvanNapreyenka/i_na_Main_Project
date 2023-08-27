const mainPage = require ('../../pages/mainPage');
const headerComponent = require('../../pages/components/header');
const loginComponent = require('../../pages/components/login')


describe('Tests for Login feature', function () {
  it('Login is protected by captha', () => {
    mainPage.navigate('https://www.lamoda.by');
    headerComponent.loginButton.click();
    loginComponent.numberOrEmailField.type('vany@yopmail.com');
    loginComponent.enterPasswordFieldNotActive.click();
    loginComponent.passwordField.type('Test123_123');
    loginComponent.loginModalButton.click();
    loginComponent.loginCaptha.should('be.visible');
  });
});