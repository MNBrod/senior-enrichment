import * as allActions from '../actions';
import { initialState } from './';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case allActions.GET_STUDENTS:
      return Object.assign({}, state, {students: action.students});
    case allActions.ADD_STUDENT:
      return Object.assign({}, state, {students: [...state.students, action.student]});
    case allActions.REMOVE_STUDENT:
      return Object.assign({}, state, {students: action.studentList});
    case allActions.ADD_CAMPUS_TO_STUDENT:
      return Object.assign({}, state, {currentStudent: action.student});
    case allActions.REMOVE_CAMPUS_FROM_STUDENT:
      return Object.assign({}, state, {currentStudent: action.student});
    default:
      return state;
  }
}
