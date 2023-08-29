const mainPage = require ('../../pages/mainPage');
const headerComponent = require('../../pages/components/header');
const loginComponent = require('../../pages/components/login');


describe('Tests for Login feature', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by');
  });
  it('Login is protected by captha', () => {
    headerComponent.loginButton.click();
    loginComponent.enterEmailIntoNumberOrEmailField('vany@yopmail.com');
    loginComponent.enterPassword('Test123_123');
    loginComponent.loginModalButton.click();
    loginComponent.loginCaptha.should('be.visible');
  });
});