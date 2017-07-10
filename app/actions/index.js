/**
 * Index for combining student and campus actions for redux, for easy importing
 */

import {
  ADD_CAMPUS,
  REMOVE_CAMPUS,
  ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID,
  REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID,
  addCampus,
  removeCampus,
  addStudentToCampus,
  removeStudentFromCampus
} from './campusActions.js';

import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_CAMPUS_TO_STUDENT,
  REMOVE_CAMPUS_FROM_STUDENT,
  addStudent,
  removeStudent,
  addCampusToStudent,
  removeCampusFromStudent
} from './studentActions.js';


export {
  ADD_CAMPUS,
  REMOVE_CAMPUS,
  ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID,
  REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID,
  addCampus,
  removeCampus,
  addStudentToCampus,
  removeStudentFromCampus,
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_CAMPUS_TO_STUDENT,
  REMOVE_CAMPUS_FROM_STUDENT,
  addStudent,
  removeStudent,
  addCampusToStudent,
  removeCampusFromStudent
};
