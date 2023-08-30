const headerComponent = require('../../pages/components/header');

class CitiesComponent {
    
    get geoModal() {
        return cy.get('.d-modal__content_geo-chooser');
    }

    get minskCity() {
        return cy.xpath('//*[contains(@class,"_cityLink_rq1gl_40")]//*[.="г. Минск"]');
    }

    get geoLocationTitle() {
        return cy.get('._locationTitle_rq1gl_59');
    }

    get geoLocationModalCloseSymbol() {
        return cy.get('.d-modal__close-button > .icon');
    }

    get citySearchField() {
        return cy.get('.input-material__input-wrapper');
    }

    get dropDownCityOrsha() {
        return cy.xpath('//*[@class="notranslate"]//*[.="г. Орша"]');
    }

    get dropDownCityFirstElement() {
        return cy.get('div._dropdown_104fn_7 > div:first-child');
    }

    choseCityViaOpenList(city) {
        city.click();
    }

    choseCityViaSearch(searchCity) {
        headerComponent.cityButton.click();
        this.citySearchField.type(searchCity);
        this.dropDownCityFirstElement.click();
    }

}

module.exports = new CitiesComponent();