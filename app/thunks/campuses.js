import axios from 'axios';
import * as actions from '../actions/campusActions.js';

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(actions.getCampuses(campuses));
      })
      .catch(console.error);
  };
}
export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(actions.addCampus(newCampus));
      })
      .catch(console.error);
  };
}
export function deleteCampus(campus) {
  return function thunk(dispatch) {
    return axios.delete(`/api/campuses/${campus.id}`)
      .then(res => res.data)
      .then(campuses => {
        dispatch(actions.removeCampus(campuses));
      })
      .catch(console.error);
  };
}
export function campusAddStudent(campus, student) {
  return function thunk(dispatch) {
    return axios.put(`/api/campuses/${campus.id}`, {student, add: true})
      .then(res => res.data)
      .then(newCampus => {
        dispatch(actions.addStudentToCampus(newCampus));
      });
  };
}
export function campusRemoveStudent(campus, student) {
  return function thunk(dispatch) {
    return axios.put(`/api/campuses/${campus.id}`, {student, add: false})
      .then(res => res.data)
      .then(newCampus => {
        dispatch(actions.removeStudentFromCampus(newCampus));
      });
  };
}
export function setCurrentCampus(campus) {
  return function thunk(dispatch) {
    dispatch(actions.assignCurrentCampus(campus));
  };
}
