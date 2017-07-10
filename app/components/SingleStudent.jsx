import React, { Component } from 'react';

export default class SingleStudent extends Component {

  constructor() {
    super();
    this.state = {
      student: {}
    };
  }

  render () {
    return (
    <div>
      <h1>{`Student:  ${this.state.student.name}`}</h1>
    </div>
    );
  }
}
