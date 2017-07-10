import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllCampuses extends Component {

  constructor() {
    super();
    this.state = {
      campuses: []
    };
  }

  render() {

    return (
      <div>
        <h1>All Campuses:</h1>
        <ul>
          {this.state.campuses.map((campus) => {
            return (
              <Link to={`/campuses/${campus.id}`} key={campus.id} value={campus}>{campus.name}</Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
