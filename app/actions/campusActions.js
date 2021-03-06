/**
 * All campus related actions for redux
 */
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
export const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
export const ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID = 'ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID';
export const REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID = 'REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID';
export const SET_CURRENT_CAMPUS = 'SET_CURRENT_CAMPUS';
export const GET_CAMPUS_TEXT_INPUT = 'GET_CAMPUS_TEXT_INPUT';
export const SUBMIT_TEXT_INPUT = 'SUBMIT_TEXT_INPUT';

export const updateCampusProperties = function (campus) {
  return {
    type: UPDATE_CAMPUS,
    campus
  };
};

export const submitTextEntry = function (textFields) {
  return {
    type: SUBMIT_TEXT_INPUT,
    textFields
  };
};

export const updateTextEntry = function (textFields) {
  return {
    type: GET_CAMPUS_TEXT_INPUT,
    textFields
  };
};

export const assignCurrentCampus = function (campus) {
  return {
    type: SET_CURRENT_CAMPUS,
    campus
  };
};

export const addCampus = function (campus) {
  return {
    type: ADD_CAMPUS,
    campus
  };
};
export const removeCampus = function (campuses) {
  return {
    type: REMOVE_CAMPUS,
    campuses
  };
};
export const addStudentToCampus = function (campus) {
  return {
    type: ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID,
    campus
  };
};
export const removeStudentFromCampus = function (campus) {
  return {
    type: REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID,
    campus
  };
};
export const getCampuses = function (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  };
};

