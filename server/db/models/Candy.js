const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
      min: 0,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
});
