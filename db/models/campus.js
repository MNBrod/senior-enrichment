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
    /**
     * Returns a promise for all students in this campus
     */
    getStudents: function () {
      return db.model('student').findAll({
        where: {
          campusId: this.id
        }
      });
    },
    /**
     * Returns a promise for an updated student.
     * @param {student} student
     *                    student to be updated
     * @param {boolean} add
     *                    whether to add or remove this student to the campus, defaults to true
     */
    updateStudent: function (student, add = true) {
      return db.model('student').findOne({
          where: {
            id: student.id
          }
        })
        .then((dbStudent) => {
          add ?
            dbStudent.update({
              campusId: this.id
            }) :
            dbStudent.update({
              campusId: null
            });
        })
        .then((updatedStudent) => updatedStudent);
    }
  }
});
