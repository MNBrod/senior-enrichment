import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <span>
          <div>
            <Link to="/campuses">All Campuses</Link>
          </div>
          <div>
            <Link to="/students">All Students</Link>
          </div>
        </span>
      </header>
    );
  }
}
