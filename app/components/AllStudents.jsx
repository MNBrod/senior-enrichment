import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, postStudent, updateStudentText, fetchCampuses, deleteStudent } from '../thunks/';


class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.students.length === 0) {
      this.props.fetchStudents();
    }
    this.props.fetchCampuses();
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
        <div>
          {this.props.students.map((student) => {
            return (
              <div className="list-group-item col-sm-4" key={student.id}>
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
          <div className="list-group-item col-sm-4">
            <div className="media-body">
              <Link to={'/students/new'}>New Student</Link>
            </div>
          </div>
        </div>
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
