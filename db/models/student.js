'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('students', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  instanceMethods: {
    /**
     * changes the campus of this student, probably not going to be used
     */
    updateCampus: function (campus, add = true) {
      return db.models('campus').findOne({
          where: {
            id: campus.id
          }
        })
        .then((dbCampus) => {
          dbCampus.updateStudent(this, add);
        })
        .then(updated => updated);
      },
      /**
       * Returns a promise for the campus of this student
       */
      getCampus: function () {
        return db.models('campus').findOne({
          where: {
            id: this.campusId
          }
        });
      }
  }
});
