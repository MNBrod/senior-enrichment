import React, { Component } from 'react';
import AllStudents from './AllStudents.jsx';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { campusAddStudent, fetchStudents, setCurrentCampus, fetchCampuses } from '../thunks/';


class SingleCampus extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.fetchCampuses();
  //   this.props.fetchStudents();
  //   console.log('will mount');
  // }
  componentDidMount() {
    console.log('mounted');
    this.props.fetchCampuses();
    this.props.fetchStudents();
    let id = this.props.match.params.id;
    this.props.setCurrentCampus(this.props.campuses.filter(element => {
      console.log(+element.id === +id);
      return +element.id === +id;
    })[0]);
  }

  render() {
    console.log('Props: ', this.props);
    return (
      <div>
        <h1>{this.props.campus.name}</h1>
        <img src={this.props.campus.imageUrl} />
        <AllStudents students={this.props.students.filter((student) => {
          return student.campusId === this.props.campus.id;
        })
        } />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //console.log('mapping', state);
  return {
    campus: state.currentCampus,
    students: state.students,
    match: ownProps.match,
    campuses: state.campuses
  };
}

const mapDispatch = { campusAddStudent, fetchStudents, setCurrentCampus, fetchCampuses };

const contain = connect(mapStateToProps, mapDispatch)(SingleCampus);
export default contain;
