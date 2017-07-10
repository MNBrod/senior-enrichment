/**
 * All student related actions for redux
 */

export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const ADD_CAMPUS_TO_STUDENT = 'ADD_CAMPUS_TO_STUDENT';
export const REMOVE_CAMPUS_FROM_STUDENT = 'REMOVE_CAMPUS_FROM_STUDENT';

export const addCampus = function (campus) {
  return {
    type: ADD_STUDENT,
    campus
  };
};
export const removeCampus = function (campus) {
  return {
    type: REMOVE_STUDENT,
    campus
  };
};
export const addCampusToStudent = function (student) {
  return {
    type: ADD_CAMPUS_TO_STUDENT,
    student
  };
};
export const removeCampusFromStudent = function (student) {
  return {
    type: REMOVE_CAMPUS_FROM_STUDENT,
    student
  };
};

