import * as allActions from '../actions';

export default function reducer(campuses = [], action) {
  console.log(action.type);
  switch (action.type) {
    case allActions.GET_CAMPUSES:
      return action.campuses;
    case allActions.ADD_CAMPUS:
      return action.campuses;
    case allActions.REMOVE_CAMPUS:
      return action.campuses;
    default:
      return campuses;
  }
}
