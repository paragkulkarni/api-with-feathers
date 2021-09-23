// Initializes the `register-user` service on path `/register-user`
const { RegisterUser } = require('./register-user.class');
const createModel = require('../../models/register-user.model');
const hooks = require('./register-user.hooks');

module.exports = function (app) {
  
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: true
  };
  


  // Initialize our service with any options it requires
  app.use('/register-user', new RegisterUser(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('register-user');

  service.hooks(hooks);
};
