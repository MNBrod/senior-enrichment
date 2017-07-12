import { initialState } from './';
import * as allActions from '../actions';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case allActions.GET_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses});
    case allActions.ADD_CAMPUS:
      return Object.assign({}, state, {campuses: [...state.campuses, action.campus]});
    case allActions.REMOVE_CAMPUS:
      return Object.assign({}, state, {campuses: [action.campuses]});
    case allActions.ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID:
      return Object.assign({}, state, {currentCampus: action.campus});
    case allActions.REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID:
      return Object.assign({}, state, {currentCampus: action.campus});
    default:
      return state;
  }
}
