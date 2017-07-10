/**
 * All campus related actions for redux
 */

export const ADD_CAMPUS = 'ADD_CAMPUS';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
export const ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID = 'ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID';
export const REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID = 'REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID';

export const addCampus = function (campus) {
  return {
    type: ADD_CAMPUS,
    campus
  };
};
export const removeCampus = function (campus) {
  return {
    type: REMOVE_CAMPUS,
    campus
  };
};
export const addStudentToCampus = function (student) {
  return {
    type: ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID,
    student
  };
};
export const removeStudentFromCampus = function (student) {
  return {
    type: REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID,
    student
  };
};

