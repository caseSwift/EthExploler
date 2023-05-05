
const app = require('../server');
const request = require('supertest');

const {describe, test, expect} = require("@jest/globals");


describe('Test the endpoints', () => {
    test('GET /transactions/:address/:startBlock', async () => {
        const response = await request(app).get('/transactions/0x690B9A9E9aa1C9dB991C7721a92d351Db4FaC990/17189929');
        expect(response.statusCode).toBe(200);
    }, { timeout: 10000 });

});
