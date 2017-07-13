/**
 * All student related actions for redux
 */

export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const ADD_CAMPUS_TO_STUDENT = 'ADD_CAMPUS_TO_STUDENT';
export const REMOVE_CAMPUS_FROM_STUDENT = 'REMOVE_CAMPUS_FROM_STUDENT';
export const GET_STUDENTS = 'GET_STUDENTS';
export const SET_CURRENT_STUDENT = 'SET_CURRENT_STUDENT';
export const GET_STUDENT_TEXT_INPUT = 'GET_STUDENT_TEXT_INPUT';
export const SUBMIT_STUDENT_TEXT_INPUT = 'SUBMIT_STUDENT_TEXT_INPUT';

export const submitStudentTextEntry = function (textFields) {
  return {
    type: SUBMIT_STUDENT_TEXT_INPUT,
    textFields
  };
};

export const updateStudentTextEntry = function (textFields) {
  return {
    type: GET_STUDENT_TEXT_INPUT,
    textFields
  };
};

export const assignCurrentStudent = function (student) {
  return {
    type: SET_CURRENT_STUDENT,
    student
  };
};

export const addStudent = function (student) {
  return {
    type: ADD_STUDENT,
    student
  };
};
export const removeStudent = function (studentList) {
  return {
    type: REMOVE_STUDENT,
    studentList
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
export const getStudents = function (students) {
  return {
    type: GET_STUDENTS,
    students
  };
};

