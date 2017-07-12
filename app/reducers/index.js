import { combineReducers } from 'redux';
import campuses from './campuses.js';
import students from './students.js';

const reducer = combineReducers({
  campuses,
  students
});

export const initialState = {
  campuses: [],
  students: [],
  currentStudent: {},
  currentCampus: {}
};

const rootReducer = reducer;
export default rootReducer;
