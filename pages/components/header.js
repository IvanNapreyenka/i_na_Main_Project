class HeaderComponent {
    get contactlessDeliveryButton() {
        return cy.get('._yellow_c9cjr_24');
    }

    get contactlessDeliveryToltip() {
        return cy.get('._right_s9bjz_35 div:nth-child(1) div._tip_c9cjr_75');
    }

    get textForDeliveryToltip() {
        return cy.get('._right_s9bjz_35 div:nth-child(1) div._tip_c9cjr_75 p');
    }

    get genuineGoodsButton() {
        return cy.get('._right_s9bjz_35 > div:nth-child(2)');
    }

    get genuineGoodsToltip() {
        return cy.get('._right_s9bjz_35 div:nth-child(2) ._tip_c9cjr_75');
    }

    get textForGenuineGoodsToltip() {
        return cy.get('._right_s9bjz_35 div:nth-child(2) div._tip_c9cjr_75 p');
    }

    get payWhenYouWantButton() {
        return cy.get('._right_s9bjz_35 > div:nth-child(3)');
    }

    get payWhenYouWantToltip() {
        return cy.get('._right_s9bjz_35 div:nth-child(3) ._tip_c9cjr_75');
    }

    get textForpayWhenYouWantToltip() {
        return cy.get('._right_s9bjz_35 div:nth-child(3) div._tip_c9cjr_75 p');
    }

    get womanButton() {
        return cy.get('._genderWrapper_1pmw8_74  a:nth-child(1)');
    }

    get manButton() {
        return cy.get('._genderWrapper_1pmw8_74  a:nth-child(2)');
    }

    get kidsButton() {
        return cy.get('._genderWrapper_1pmw8_74  a:nth-child(3)');
    }

    get loginButton() {
        return cy.get('._root_12pcw_2 > [role="button"]');
    }

    get cityButton() {
        return cy.get('.js-header-geo-wrapper');
    }

    get newGeoLocationInTheHeader() {
        return cy.get('._message_32s20_11');
    }

    navigateToPagesViaHeader(button) {
        button.click();
    }

}

module.exports = new HeaderComponent();