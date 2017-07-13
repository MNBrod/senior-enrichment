import axios from 'axios';
import * as actions from '../actions/studentActions.js';

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then((students) => {
        dispatch(actions.getStudents(students));
      })
      .catch(console.error);
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then((newStudent) => {
        dispatch(actions.addStudent(newStudent));
      })
      .catch(console.error);
  };
}

export function deleteStudent(student) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${student.id}`)
      .then(res => res.data)
      .then((studentList) => {
        dispatch(actions.deleteStudent(studentList));
      });
  };
}

export function studentAddCampus(student, campus) {
  return function thunk(dispatch) {
    return axios.put(`/api/students/${student.id}`, {
        campusId: campus.id
      })
      .then(res => res.data)
      .then((student) => {
        dispatch(actions.addCampusToStudent(student));
      });
  };
}
export function setCurrentStudent(student) {
  return function thunk(dispatch) {
    dispatch(actions.assignCurrentStudent(student));
  };
}
export function updateStudentText(textFields) {
  return function thunk(dispatch) {
    dispatch(actions.updateStudentTextEntry(textFields));
  };
}

// export function studentRemoveCampus(student) {
//   return function thunkfunction(dispatch) {
//     return axios.put(`/api/students/student.id`, {campusId: null})
//     .then(res => res.data)
//     .then(student => {
//       dispatch(actions.removeCampusFromStudent(student));
//     });
//   };
// }
