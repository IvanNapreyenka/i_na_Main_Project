const BasePage = require('./basePage');

class ProductListPage extends BasePage {

    get titleTextRequestedItem() {
        return cy.get('._titleText_641wy_15');
    }

    get imageOfAnyProduct() {
        return cy.get('.x-product-card__pic-catalog');
    }

    get compositionOfProduct() {
        return cy.get('.x-product-card__pic-catalog');
    }

}

module.exports = new ProductListPage();