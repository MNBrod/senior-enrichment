import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, postStudent, updateStudentText, fetchCampuses, deleteStudent } from '../thunks/';


class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.students.length === 0) {
      this.props.fetchStudents();
    }
    this.props.fetchCampuses();
  }

  handleTextChange(event) {
    if (event.target.name === 'name') {
      this.props.updateStudentText({
        name: event.target.value,
        email: this.props.studentText.email
      });
    }
    else {
      this.props.updateStudentText({
        name: this.props.studentText.name,
        email: event.target.value
      });
    }
  }

  handleTextSubmit(event) {
    event.preventDefault();
    this.props.postStudent({
      name: this.props.studentText.name,
      email: this.props.studentText.email,
      campusId: event.target.select.value
    });
    this.props.updateStudentText({
      name: '',
      email: ''
    });
  }
  handleDeleteSubmit(event) {
    event.preventDefault();
    let student = this.props.students.filter(student => +student.id === +event.target.value)[0];
    this.props.deleteStudent(student)
      .then(() => this.props.fetchStudents());
  }


  render() {
    return (
      <div className="container">
        <h1>Students:</h1>
        <div className="user-list">
          {this.props.students.map((student) => {
            return (
              <div className="list-group-item min-content user-item" key={student.id}>
                <div className="media">
                  <div className="media-middle media-body">
                    <Link
                      to={`/students/${student.id}`}
                      value={student}>{student.name}</Link>
                  </div>
                  <div className="media-right media-middle">
                    <button onClick={this.handleDeleteSubmit} value={student.id}>
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3>New Student:</h3>
        <form onSubmit={this.handleTextSubmit}>
          <div>
            <lable>Student Name: </lable>
            <input
              value={this.props.studentText.name}
              name="name"
              type="text"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              value={this.props.studentText.imageUrl}
              name="imageUrl"
              type="text"
              onChange={this.handleTextChange}
            />
          </div>
          <div>
            <lable>Pick a campus: </lable>
            <select name="select">
              {this.props.campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                );
              })}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  let students = ownProps.students || state.students;
  return {
    students,
    studentText: state.studentText,
    campuses: state.campuses,
    isSub: !!ownProps.students
  };
}
const mapDispatch = { fetchStudents, postStudent, updateStudentText, fetchCampuses, deleteStudent };
const Container = connect(mapStateToProps, mapDispatch)(AllStudents);
export default Container;
