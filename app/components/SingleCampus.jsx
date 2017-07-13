import React, { Component } from 'react';
import AllStudents from './AllStudents.jsx';
import UpdateCampus from './UpdateCampus.jsx';
import { connect } from 'react-redux';
import { campusAddStudent, fetchStudents, setCurrentCampus, fetchCampuses, studentAddCampus } from '../thunks/';


class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchCampuses()
    .then(() => {
      return this.props.fetchStudents();
    })
    .then(() => {
      let id = this.props.match.params.id;
      this.props.setCurrentCampus(this.props.campuses.filter(element => {
        return +element.id === +id;
      })[0]);
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    let student = this.props.students.filter(element => +element.id === +event.target.select.value)[0];
    console.log('EVENT:', student);
    this.props.studentAddCampus(student, this.props.campus)
    .then(() => {
      this.props.fetchStudents();
      this.forceUpdate();
    });

  }

  render() {
    let otherStudents = this.props.students.filter(student => +student.campusId !== +this.props.match.params.id);
    return (
      <div>
        <h1>{this.props.campus.name}</h1>
        <img src={this.props.campus.imageUrl} />
        <AllStudents students={this.props.students.filter((student) => {
          return +student.campusId === +this.props.campus.id;
        })
        } />
        <form onSubmit={this.handleSubmit}>
          <label>Add Student: </label>
          <select name="select">
            <option>-</option>
            {otherStudents.map((student) => {
              return (
                <option key={student.id} value={student.id}>{student.name}</option>
              );
            })}
          </select>
          <button type="submit">Add this student</button>
        </form>
        <UpdateCampus campus={this.props.campus} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    campus: state.currentCampus,
    students: state.students,
    match: ownProps.match,
    campuses: state.campuses
  };
}

const mapDispatch = { campusAddStudent, fetchStudents, setCurrentCampus, fetchCampuses, studentAddCampus };

const contain = connect(mapStateToProps, mapDispatch)(SingleCampus);
export default contain;
