import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AllStudents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Students:</h1>
        <ul>
          {this.props.students.map((student) => {
            return (
              <Link
                to={`/students/${student.id}`}
                key={student.id}
                student={student}>{student.name}</Link>
            );
          })}
        </ul>
      </div>
    );
  }
}


/**
 * Maps state to props. If a student key is associated with ownProps,
 * overrides the state. (ie defaults to display state.students. Can be reused
 * to display a list of students)
 *
 * @param {any} state
 * @param {any} ownProps
 * @returns
 */
function mapStateToProps(state, ownProps) {
  // if (ownProps.students) {
  //   return {
  //     students: ownProps.sudents
  //   };
  // }
  // return {
  //   students: state.students
  // };
  console.log('ownProps:', ownProps);
  return {
    students: ownProps.students || state.students
  };
}

const Container = connect(mapStateToProps)(AllStudents);
export default Container;
