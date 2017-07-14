import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, postStudent, updateStudentText, fetchCampuses, deleteStudent } from '../thunks/';


class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  componentDidMount () {
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
    this.props.history.push('/students');
  }

  render() {
    return (
      <div>
        <h3>New Student:</h3>
        <form className="form-horizontal" onSubmit={this.handleTextSubmit}>
          <div className="form-group col-sm-5">
            <label className="control-label">Student Name: </label>
            <input
              value={this.props.studentText.name}
              name="name"
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
            />
            <label className="control-label">Email: </label>
            <input
              value={this.props.studentText.imageUrl}
              name="imageUrl"
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
            />
            <lable>Pick a campus: </lable>
            <select className="form-control" name="select">
              {this.props.campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>{campus.name}</option>
                );
              })}
            </select>
            <button className="btn btn-submit" type="submit">Submit</button>
          </div>
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
    isSub: !!ownProps.students,
    history: ownProps.history
  };
}
const mapDispatch = { fetchStudents, postStudent, updateStudentText, fetchCampuses, deleteStudent };
const Container = connect(mapStateToProps, mapDispatch)(NewStudent);
export default Container;
