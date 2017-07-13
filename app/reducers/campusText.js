import * as allActions from '../actions';

export default function reducer (campusText = {
  name: '',
  imageUrl: ''
}, action) {
  switch (action.type) {
    case allActions.GET_CAMPUS_TEXT_INPUT:
      return action.textFields;
    case allActions.SUBMIT_TEXT_INPUT:
      return action.textFields;
    default: return campusText;
  }
}
