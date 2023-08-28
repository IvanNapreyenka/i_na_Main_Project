const Ajv = require('ajv');
const postBannerSchema = require('../data/postBannerSchema.v1.json');
const ajv = new Ajv();

describe('Tests for POST Request', () => {
  let response;

  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://www.lamoda.by/api/v1/banner/get',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "slot_id": "js_header_usp2",
        "category_id": "",
        "brand_group": "",
        "display_locations": "",
        "is_new": 0,
        "is_sale": 0,
        "user_status": ""
      }
    }).then((res) => {
      response = res;
    });
  });

  it('POST Banner API request returns status code = 200', () => {
    expect(response.status).to.eq(200);
  });

  it('POST Banner API request returns correct JSON schema', () => {
    const result = ajv.validate(postBannerSchema, response.body);
    expect(result).to.be.true;
  });
});