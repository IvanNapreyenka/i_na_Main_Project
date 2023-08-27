class SearchComponent {
    get searchField() {
        return cy.get('._input_1su1z_19');
    }
    
    get searchButton() {
        return cy.get('.x-button');
    }

    get searchHintsDropDown() {
        return cy.get('._suggest_1su1z_50');
    }

    get previouslySearchedItems() {
        return cy.get('._oldTitle_z9ur1_9');
    }
    get lastSearchedItem() {
        return cy.get('._list_z9ur1_36 div:nth-child(1)');
    }

    get previousSearchedItem() {
        return cy.get('._list_z9ur1_36 div:nth-child(2)');
    }

    enteringTextInField(searchText) {
        this.searchField.type(searchText);
    }

    clearSearchField() {
        this.searchField.click();
        this.searchField.clear();
    }

    searchByText(searchText) {
        this.searchField.type(searchText);
        this.searchButton.click();
    }
}

module.exports = new SearchComponent();