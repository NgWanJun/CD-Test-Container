const request = require('supertest');
const server = require('../index');

describe('GET /', function() {
  it('responds with "Hello, world!"', function(done) {
    request(server)
      .get('/')
      .expect(200, 'Hello, world!', done);
  });
});
afterAll((done) => {
  server.close(done);
});
