import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default" id="makethisworkpls">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img className="img-circle img-responsive" width="20px"  src="/hamilton.png" />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="home-image" />
            <li id="AllCampuses">
              <Link to="/campuses">All Campuses</Link>
            </li>
            <li id="AllStudents">
              <Link to="/students">All Students</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
