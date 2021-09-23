const tooltip = require('./tooltip/tooltip.service.js');
const registerUser = require('./register-user/register-user.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(tooltip);
  app.configure(registerUser);
};
