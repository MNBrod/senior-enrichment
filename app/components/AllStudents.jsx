import React, { Component } from 'react';

export default class AllStudents extends Component {

  constructor() {
    super();
    this.state = {
      students: []
    };
  }
  componentDidMount() {

  }

  render() {
    if (!this.state) { return null; }
    return (
      <div>
        <h1>All Students:</h1>
        <ul>
          {this.state.students.map((student) => {
            return (
              <li key={student.id} student={student}>{student.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
