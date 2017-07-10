'use strict';
const api = require('express').Router();
const studentRouter = require('./routes/students.js');
const campusesRouter = require('./routes/campuses.js');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.use('/students', studentRouter);
api.use('/campuses', campusesRouter);
//students:


//campus:


/*
 * can create a campus
 * can edit a campus's info, including adding/removing a student to/from that campus
 * can delete a campus
 *
 * can create a student
 * can edit a student's info, including the campus that student is assigned to
 * can delete a student
 */


module.exports = api;
