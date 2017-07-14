import React, { Component } from 'react';

export default class Home extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="hello">Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <p>
          Hi there! Welcome to my school! If you have any skill (and I mean any) with stying webpages,
          consider yourself admitted to the class of now!
        </p>
        <p>
          Attendance is mandatory, and you can start
          your first assignment right now: making this website look less like crap.
        </p>
        <p>
          (Should be easy,
          given that pretty much anything would further that goal at this point).
        </p>
      </div>
    );
  }
}
