import axios from 'axios';
import * as actions from '../actions/studentActions.js';

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then((students) => {

      });
  };
}
