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
    return cy.xpath('//*[.="Шерсть"]');
}

get applyMaterialButton() {
    return cy.get('._footer_1x1qp_7 .x-button');
}

get chosenMaterial() {
    return cy.get('._rightColumn_py6ob_4 div:nth-child(2) ._value_pjvgk_44');
}

get clearMaterialFilterButton() {
    return cy.get(':nth-child(2) >.v-popper .v-popper-target ._icon_pjvgk_70 .icon');
}

clearFilter(cancelFilterButton) {
    cancelFilterButton.click();
}

choseFilterElement(filterElement, applyButton) {
    filterElement.click();
    applyButton.click();
}

}

module.exports = new FilterComponent();