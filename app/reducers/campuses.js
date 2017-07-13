import * as allActions from '../actions';

export default function reducer(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case allActions.GET_CAMPUSES:
      return action.campuses;
    case allActions.ADD_CAMPUS:
      return Object.assign({}, state, {campuses: [...state.campuses, action.campus]});
    case allActions.REMOVE_CAMPUS:
      return Object.assign({}, state, {campuses: [action.campuses]});
    default:
      return state;
  }
}
