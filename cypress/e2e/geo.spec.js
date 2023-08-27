const mainPage = require ('../../pages/mainPage');
const headerComponent = require('../../pages/components/header');
const citiesComponent = require('../../pages/components/cities');


describe('Tests for cities feature', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by');
  });
  it('An user are able to choose city from the list', () => {
    headerComponent.cityButton.click();
    citiesComponent.minskCity.click();
    citiesComponent.geoLocationTitle.should('contain.text', 'г. Минск');
    citiesComponent.geoLocationModalCloseSymbol.click();
    headerComponent.newGeoLocationInTheHeader.should('contain.text', 'г. Минск');
  });
  it('An user are able to find chose a city on Geo Modal', () => {
    headerComponent.cityButton.click();
    citiesComponent.citySearchField.type('Орша');
    citiesComponent.dropDownCityOrsha.click();
    citiesComponent.geoLocationTitle.should('contain.text', 'г. Орша');
    citiesComponent.geoLocationModalCloseSymbol.click();
    headerComponent.newGeoLocationInTheHeader.should('contain.text', 'г. Орша');
  });
});