// Initializes the `tooltip` service on path `/tooltip`
const { Tooltip } = require('./tooltip.class');
const createModel = require('../../models/tooltip.model');
const hooks = require('./tooltip.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tooltip', new Tooltip(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tooltip');

  service.hooks(hooks);
};
