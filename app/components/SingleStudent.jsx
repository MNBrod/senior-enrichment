import React, { Component } from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    student: state.currentStudent
  };
}

function SingleStudent(props) {
  let studentKeys = Object.keys(props.student);
  return (
    <div>
      <h1>{`Student:  ${props.student.name}`}</h1>
      <ul>
        {studentKeys.map((key) => {
          return (
            <li key={key}>{props.student.key}</li>
          );
        })}
      </ul>
    </div>
  );
}

const Container = connect(mapStateToProps)(SingleStudent);
export default Container;
