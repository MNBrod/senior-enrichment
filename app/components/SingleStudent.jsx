import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UpdateStudent from './UpdateStudent.jsx';
import { setCurrentStudent, setCurrentCampus, fetchCampuses, fetchStudents, studentAddCampus } from '../thunks/';


class SingleStudent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit (event) {
    event.preventDefault();
    let campus = this.props.campuses.filter((campus) => +campus.id === +event.target.select.value )[0];
    this.props.studentAddCampus(this.props.student, campus)
    .then(() => {
      return this.props.fetchStudents();
    })
    .then(() => {
      let id = this.props.match.params.id;
      let student = this.props.students.filter(element => +element.id === +id)[0];
      this.props.setCurrentStudent(student);
      this.props.setCurrentCampus(campus);

    });
  }

  render() {
    let otherCampuses = this.props.campuses.filter((campus) => +campus.id !== +this.props.student.campusId);
    return (
      <div>
        <h1>{`Student:  ${this.props.currentStudent.name}`}</h1>
        <div>
          <h2>Email: </h2>
          <p>{this.props.currentStudent.email}</p>
        </div>
        <div>
          <h2>Campus: </h2>
          <Link to={`/campuses/${this.props.campus.id}`}>{this.props.campus.name}</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <lable>Change Campus:</lable>
          <select name="select">
            {otherCampuses.map((campus) => {
              return (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              );
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
        <UpdateStudent student={this.props.student} />
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

const mapDispatch = { setCurrentStudent, fetchCampuses, fetchStudents, setCurrentCampus, studentAddCampus };

const Container = connect(mapStateToProps, mapDispatch)(SingleStudent);
export default Container;
