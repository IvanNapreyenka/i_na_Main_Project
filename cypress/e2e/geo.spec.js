const mainPage = require ('../../pages/mainPage');
const headerComponent = require('../../pages/components/header');
const citiesComponent = require('../../pages/components/cities');


describe('Tests for cities feature', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by');
  });
  it('An user are able to choose city from the list', () => {
    citiesComponent.choseCityViaOpenList();
    citiesComponent.geoLocationTitle.should('contain.text', 'г. Минск');
    headerComponent.newGeoLocationInTheHeader.should('contain.text', 'г. Минск');
  });
  it('An user are able to find chose a city on Geo Modal', () => {
    citiesComponent.choseCityViaSearch('Орша');
    citiesComponent.geoLocationTitle.should('contain.text', 'г. Орша');
    headerComponent.newGeoLocationInTheHeader.should('contain.text', 'г. Орша');
  });
});