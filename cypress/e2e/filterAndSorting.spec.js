const mainPage = require ('../../pages/mainPage');
const filterComponent = require ('../../pages/components/filter')

describe('Tests for filter and sorting features', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by/c/355/clothes-zhenskaya-odezhda/');
  });
  it('All possible filters are displayed', () => {
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
  it('An user are able to see by chosen material', () => {
    filterComponent.materialsFilter.click();
    filterComponent.checkboxWool.click();
    filterComponent.applyMaterialButton.click();
    filterComponent.chosenMaterial.should('have.text', 'Шерсть');
  });
  it('Material button is changed view after clearing Material filter', () => {
    filterComponent.materialsFilter.click();
    filterComponent.checkboxWool.click();
    filterComponent.applyMaterialButton.click();
    filterComponent.clearFilterButton.click();
    filterComponent.clearFilterButton.should('not.be.enabled');
    filterComponent.chosenMaterial.should('not.exist');
  });
});