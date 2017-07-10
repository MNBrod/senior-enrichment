'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  instanceMethods: {
    getStudents: function () {
      return db.model('student').findAll({
        where: {
          campusId: this.id
        }
      });
    }
  }
});
