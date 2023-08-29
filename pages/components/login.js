class LoginComponent {
    get loginModal() {
        return cy.get('.d-modal__frame');
    }

    get numberOrEmailField() {
        return cy.get('._content_1086m_10 div:nth-child(2) .input-material__input-wrapper input');
    }

    get passwordField() {
        return cy.get('._content_1086m_10 div:nth-child(3) div.input-material__input-wrapper input');
    }

    get loginModalButton() {
        return cy.get('._footer_3a8g7_36 .x-button');
    }

    get notActivePasswordField() {
        return cy.get('._content_1086m_10 div:nth-child(3) .input-material__placeholder.input-material__placeholder');
    }

    get loginCaptha() {
        return cy.get('.x-recaptcha-challenge');
    }

    enterEmailIntoNumberOrEmailField(searchText) {
        this.numberOrEmailField.type(searchText);
    }

    activateNotActivePasswordField(searchText) {
        this.numberOrEmailField.type(searchText);
    }

    enterPassword(searchText) {
        this.notActivePasswordField.click();
        this.passwordField.type(searchText);
    }

}

module.exports = new LoginComponent();