import * as allActions from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case allActions.GET_STUDENTS:
      return action.students;
    case allActions.ADD_STUDENT:
      return action.students;
    case allActions.REMOVE_STUDENT:
      return action.students;
    default:
      return state;
  }
}
