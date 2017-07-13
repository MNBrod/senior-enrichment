import { combineReducers } from 'redux';
import campuses from './campuses.js';
import students from './students.js';
import currentCampus from './currentCampus.js';
import currentStudent from './currentStudent.js';
import campusText from './campusText.js';

const reducer = combineReducers({
  campuses,
  students,
  currentCampus,
  currentStudent,
  campusText
});

export const initialState = {
  campuses: [],
  students: [],
  currentStudent: {},
  currentCampus: {}
};

const rootReducer = reducer;
export default rootReducer;