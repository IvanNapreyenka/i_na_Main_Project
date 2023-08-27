const Ajv = require('ajv');
const getCitiesSchema = require('../data/getCitiesSchema.v1.json')
const ajv = new Ajv();

describe ('Tests for get Cities API', function() {
    let getCitiesResponse;

    before(() => {
    getCitiesResponse = cy.request('GET','https://www.lamoda.by/api/v1/cities/popular');
    });

    it('Get cities request returns status code = 200', () => {
        getCitiesResponse.then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Get cities request returns correct JSON schema', () => {
        getCitiesResponse.then((response) => {
            const result = ajv.validate(getCitiesSchema, response.body)
            expect(result).to.be.true
        });
    });
});

