const Ajv = require('ajv');
const postSetTagsSchema = require('../data/postSetTagsSchema.v1.json')
const ajv = new Ajv();

describe('Tests for POST Request', function() {

let postSetTagsResponse;

    const requestBody = {"request":{"application":"4802D-434A7","hwid":"4802D-434A7_d7bd2b97-19da-445f-85cc-434decf0ed51","userId":"AD024064C72AEB64325048B602F82617","device_type":11,"device_model":"Chrome 116","timezone":10800,"language":"ru-RU","v":"3.23.0","ts_offset":10800}};
  
    const requestHeaders = {
      'Authority': 'lamoda.pushwoosh.com',
      'Origin': 'https://www.lamoda.by',
      'Referer': 'https://www.lamoda.by/women-home/',
    };
  
    before(() => {
        postSetTagsResponse = cy.request({
            method: 'POST',
            url: 'https://lamoda.pushwoosh.com/json/1.3/registerUser',
            headers: requestHeaders,
            body: requestBody
          });
        });
  
    it('POST request returns status code = 200', () => {
        postSetTagsResponse().then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    it('POST request returns correct JSON schema', () => {
        postSetTagsResponse().then((response) => {
        const result = ajv.validate(postSetTagsSchema, response.body);
        expect(result).to.be.true;
      });
    });
  });