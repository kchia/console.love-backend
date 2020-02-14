const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('GET /', () => {
  it('should return a 200 response', done => {
    api
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});