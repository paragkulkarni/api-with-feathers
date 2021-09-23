const assert = require('assert');
const app = require('../../src/app');

describe('\'tooltip\' service', () => {
  it('registered the service', () => {
    const service = app.service('tooltip');

    assert.ok(service, 'Registered the service');
  });
});
