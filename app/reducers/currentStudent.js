import * as allActions from '../actions';

export default function reducer(currentStudent = {}, action) {
  switch (action.type) {
    case allActions.SET_CURRENT_STUDENT:
      return action.student;
    case allActions.ADD_CAMPUS_TO_STUDENT:
      return action.student;
    case allActions.REMOVE_CAMPUS_FROM_STUDENT:
      return action.student;
    default:
      return currentStudent;
  }
}
