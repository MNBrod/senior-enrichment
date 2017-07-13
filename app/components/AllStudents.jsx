import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../thunks/';


class AllStudents extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.students.length === 0) {
      this.props.fetchStudents();
    }
  }

  render() {
    return (
      <div>
        <h1>Students:</h1>
        <ul>
          {this.props.students.map((student) => {
            return (
              <div key={student.id}>
                <Link
                  to={`/students/${student.id}`}
                  value={student}>{student.name}</Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  // if (ownProps.students) {
  //   return {
  //     students: ownProps.sudents
  //   };
  // }
  // return {
  //   students: state.students
  // };
  let students = ownProps.students || state.students;
  return {
    students
  };
}
const mapDispatch = { fetchStudents };
const Container = connect(mapStateToProps, mapDispatch)(AllStudents);
export default Container;
