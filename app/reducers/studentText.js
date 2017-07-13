import * as allActions from '../actions';

export default function reducer (studentText = {
  name: '',
  email: ''
}, action) {
  switch (action.type) {
    case allActions.GET_STUDENT_TEXT_INPUT:
      return action.textFields;
    case allActions.SUBMIT_STUDENT_TEXT_INPUT:
      return action.textFields;
    default: return studentText;
  }
}
