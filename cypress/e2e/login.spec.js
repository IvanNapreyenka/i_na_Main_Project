const mainPage = require ('../../pages/mainPage');
const headerComponent = require('../../pages/components/header');
const loginComponent = require('../../pages/components/login');


describe('Tests for Login feature', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by');
  });
  it('"Неверный логин или пароль." is displayed when an user tries to login with incorrect password', () => {
    headerComponent.navigateToPagesViaHeader(headerComponent.loginButton);
    loginComponent.loginWithEmail('vany@yopmail.com', 'Test123_123');
    loginComponent.loginsSnackbar.should('be.visible');
    loginComponent.loginsSnackbar.should('have.text', 'Неверный логин или пароль.');
  });
});