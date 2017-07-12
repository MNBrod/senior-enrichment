import * as allActions from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case allActions.GET_STUDENTS:
      return action.students;
    case allActions.ADD_STUDENT:
      return Object.assign({}, state, {students: [...state.students, action.student]});
    case allActions.REMOVE_STUDENT:
      return Object.assign({}, state, {students: action.studentList});
    default:
      return state;
  }
}
