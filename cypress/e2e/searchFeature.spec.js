const mainPage = require ('../../pages/mainPage');
const productListPage = require('../../pages/productListPage');
const searchComponent = require('../../pages/components/search');

describe('Tests for search feature', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by');
  });
  it('Maximum of 10 hints are displayed when an user enters text in the search field', () => {
    searchComponent.enteringTextInField('Брюки');
    searchComponent.searchHintsDropDown.children().should('have.length', 10);
  });
  it('All 10 items in the search hints drop-down contain the search word', () => {
    searchComponent.enteringTextInField('Брюки');
    searchComponent.searchHintsDropDown.children().each((child) => {cy.wrap(child).contains('брюки');});
  });
  it('An user is navigated to SearchResult page with the products they are looking for after clicking Search button', () => {
    searchComponent.searchByText('Туфли');
    cy.url().should('include', 'https://www.lamoda.by/catalogsearch/result/');
    productListPage.titleTextRequestedItem.should('contain.text', 'Товары по запросу «туфли»');
  });
  it('After clicking on the search field in search drop-down, hints appear in the form of things that the user was previously looking for', () => {
    searchComponent.searchByText('Блуза');
    mainPage.navigate('https://www.lamoda.by');
    searchComponent.searchByText('Носки');
    mainPage.navigate('https://www.lamoda.by');
    searchComponent.searchField.click();
    searchComponent.previouslySearchedItems.should('contain.text', 'Ранее вы искали');
    searchComponent.lastSearchedItem.should('contain.text', 'носки');
    searchComponent.previousSearchedItem.should('contain.text', 'блуза');
  });
});
