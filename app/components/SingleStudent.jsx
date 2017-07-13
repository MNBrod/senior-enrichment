import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentStudent, setCurrentCampus, fetchCampuses, fetchStudents } from '../thunks/';


class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents()
      .then(() => {
        let id = this.props.match.params.id;
        let student = this.props.students.filter(element => +element.id === +id)[0];
        this.props.setCurrentStudent(student);
      })
      .then(() => {
        this.props.setCurrentCampus(this.props.campuses.filter((campus) => campus.id === this.props.currentStudent.campusId)[0]);
      });
  }

  render() {

    return (
      <div>
        <h1>{`Student:  ${this.props.currentStudent.name}`}</h1>
        <div>
          <h2>Email: </h2>
          <p>{this.props.currentStudent.email}</p>
        </div>
        <div>
          <h2>Campus: </h2>
          <p>{this.props.campus.name}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    student: state.currentStudent,
    campus: state.currentCampus,
    match: ownProps.match,
    campuses: state.campuses,
    students: state.students,
    currentStudent: state.currentStudent
  };
}

const mapDispatch = { setCurrentStudent, fetchCampuses, fetchStudents, setCurrentCampus };

const Container = connect(mapStateToProps, mapDispatch)(SingleStudent);
export default Container;
