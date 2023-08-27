class FilterComponent {
get byPopularityFilter() {
    return cy.xpath('//*[.="По популярности"]');
}

get materialsFilter() {
    return cy.xpath('//*[.="Материалы"]');
}

get colorFilter() {
    return cy.xpath('//*[.="Цвет"]');
}

get sizeFilter() {
    return cy.xpath('//*[.="Размер"]');
}

get brandFilter() {
    return cy.xpath('//*[.="Бренд"]');
}

get priceFilter() {
    return cy.xpath('//*[.="Цена"]');
}

get detailsFilter() {
    return cy.xpath('//*[.="Детали"]');
}

get helpingЕhePlanetFilter() {
    return cy.xpath('//*[.="Помогаю планете"]');
}

get styleFilter() {
    return cy.xpath('//*[.="Стиль"]');
}

get patternFilter() {
    return cy.xpath('//*[.="Узор"]');
}

get discountOnlyFilter() {
    return cy.xpath('//*[.="Только со скидкой"]');
}

get onlyLamodaGoodsFilter() {
    return cy.xpath('//*[.="Только товары Lamoda"]');
}

get checkboxWool() {
    return cy.get('div:nth-child(27) ._content_1xdyy_51');
}

get applyMaterialButton() {
    return cy.get('._footer_1x1qp_7 .x-button');
}

get chosenMaterial() {
    return cy.get('._rightColumn_py6ob_4 div:nth-child(2) ._value_pjvgk_44');
}

}

module.exports = new FilterComponent();