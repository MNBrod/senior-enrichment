import React, { Component } from 'react';
import AllStudents from './AllStudents.jsx';
function mapStateToProps(state, ownProps) {
  return {
    campus: state.currentCampus
  };
}

function SingleCampus(props) {
  return (
    <div>
      <h1>{props.campus.name}</h1>
      <img src={props.campus.imageUrl} />
      <AllStudents students={props.students.filter((student) => {
        return student.campusId === props.campus.id;
      })
      } />
    </div>
  );
}

const Container = connect(mapStateToProps)(SingleCampus);
export default Container;
