import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStudentText, updateStudent, setCurrentStudent } from '../thunks/';

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudent;
    if (this.props.studentText.name !== '') {
      if (this.props.studentText.email !== '') {
        newStudent = {
          name: this.props.studentText.name,
          email: this.props.studentText.email
        };
      } else {
        newStudent = {
          name: this.props.studentText.name,
          email: this.props.student.email
        };
      }
    } else if (this.props.studentText.email !== '') {
      newStudent = {
        name: this.props.student.name,
        email: this.props.studentText.email
      };
    } else {
      newStudent = {
        name: this.props.studentText.name,
        email: this.props.student.email
      };
    }
    this.props.updateStudent(this.props.student, newStudent)
      .then(() => {
        return this.props.updateStudentText({
          name: '',
          email: ''
        });
      });

  }

  handleChange(event) {
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

  render() {
    return (
      <div>
        <h2>Edit Student:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input name="name" type="text" value={this.props.studentText.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" type="text" value={this.props.studentText.email} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    studentText: state.studentText,
    history: ownProps.history,
    student: ownProps.student
  };
}


const mapDispatch = { updateStudentText, updateStudent, setCurrentStudent };

const Container = connect(mapStateToProps, mapDispatch)(UpdateStudent);
export default Container;
