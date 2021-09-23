const assert = require('assert');
const app = require('../../src/app');

describe('\'register-user\' service', () => {
  it('registered the service', () => {
    const service = app.service('register-user');

    assert.ok(service, 'Registered the service');
  });
});
