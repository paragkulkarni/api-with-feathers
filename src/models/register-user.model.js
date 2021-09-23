// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

const DataTypes = Sequelize.DataTypes;


module.exports = function (app) {
  
  const sequelizeClient = app.get('sequelizeClient');
  const tableName = 'user_details';

  const registerUser = sequelizeClient.define(tableName, {
    username: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    updatedAt: {
      type: DataTypes.TIME,
      field: 'updatedat'
    },
    createdAt: {
      type: DataTypes.TIME,
      field: 'createdat'
    }
  }, {
    schema:'login'
  });

  // eslint-disable-next-line no-unused-vars
  registerUser.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return registerUser;
};
