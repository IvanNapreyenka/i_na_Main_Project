const mainPage = require ('../../pages/mainPage');
const filterComponent = require ('../../pages/components/filter')
const productListPage = require('../../pages/productListPage');

describe('Tests for filter feature', function () {
  it('All possible filters are displayed', () => {
    mainPage.navigate('https://www.lamoda.by/c/355/clothes-zhenskaya-odezhda/');
    filterComponent.byPopularityFilter.should('be.visible');
    filterComponent.materialsFilter.should('be.visible');
    filterComponent.colorFilter.should('be.visible');
    filterComponent.sizeFilter.should('be.visible');
    filterComponent.brandFilter.should('be.visible');
    filterComponent.priceFilter.should('be.visible');
    filterComponent.detailsFilter.should('be.visible');
    filterComponent.helpingЕhePlanetFilter.should('be.visible');
    filterComponent.styleFilter.should('be.visible');
    filterComponent.patternFilter.should('be.visible');
    filterComponent.discountOnlyFilter.should('be.visible');
    filterComponent.onlyLamodaGoodsFilter.should('be.visible');
  });
  it('An user are able to filter by "Материалы"', () => {
    mainPage.navigate('https://www.lamoda.by/c/355/clothes-zhenskaya-odezhda/');
    filterComponent.materialsFilter.click();
    filterComponent.checkboxWool.click();
    filterComponent.applyMaterialButton.click();
    filterComponent.chosenMaterial.should('have.text', 'Шерсть');
  });
});