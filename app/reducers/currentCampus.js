import * as allActions from '../actions';

export default function reducer(currentCampus = {}, action) {
  switch (action.type) {
    case allActions.SET_CURRET_CAMPUS:
      return action.campus;
    case allActions.ADD_STUDENT_TO_CAMPUS_BY_STUDENT_ID:
      return action.campus;
    case allActions.REMOVE_STUDENT_FROM_CAMPUS_BY_STUDENT_ID:
      return action.campus;
    default:
      return currentCampus;
  }
}
