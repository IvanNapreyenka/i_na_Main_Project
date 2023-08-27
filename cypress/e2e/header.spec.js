const mainPage = require ('../../pages/mainPage');
const headerComponent = require('../../pages/components/header');
const citiesComponent = require('../../pages/components/cities');


describe('Tests for header view and features', function () {
  beforeEach(() => {
    mainPage.navigate('https://www.lamoda.by');
  });
  it('Tooltip with text is displayed when hovering over "Contactless delivery"', () => {
    headerComponent.contactlessDeliveryButton.realHover('mouse');
    headerComponent.contactlessDeliveryToltip.should('be.visible');
    headerComponent.textForDeliveryToltip.should('have.text', 'Воспользуйся бесконтактной доставкой и оплачивайте покупки онлайн с Apple Pay и Google Pay');
  });
  it('Tooltip with text is displayed when hovering over "Genuine goods"', () => {
    headerComponent.genuineGoodsButton.realHover('mouse');
    headerComponent.genuineGoodsToltip.should('be.visible');
    headerComponent.textForGenuineGoodsToltip.should('have.text', 'Все товары — подлинные. Подтвердим сертификатами производителей.');
  });
  it('Tooltip with text is displayed when hovering over "Pay when you want"', () => {
    headerComponent.payWhenYouWantButton.realHover('mouse');
    headerComponent.payWhenYouWantToltip.should('be.visible');
    headerComponent.textForpayWhenYouWantToltip.should('have.text', 'Lamoda предлагает 3 варианта оплаты заказа: онлайн-оплата на сайте и в приложении Lamoda при оформлении заказа; оплата при получении заказа; а также оплата в рассрочку.');
  });
  it('An user are able to navigate to woman-home page via header', () => {
    headerComponent.womanButton.click();
    cy.url().should('include', 'https://www.lamoda.by/women-home/')
  });
  it('An user are able to navigate to man-home page via header', () => {
    headerComponent.manButton.click();
    cy.url().should('include', 'www.lamoda.by/men-home/');
  });
  it('An user are able to navigate to kids-home page via header', () => {
    headerComponent.kidsButton.click();
    cy.url().should('include', 'https://www.lamoda.by/kids-home/');
  });
  it('An user are able to navigate to Cities modal via header', () => {
    headerComponent.cityButton.click();
    citiesComponent.geoModal.should('be.visible');
  });
});