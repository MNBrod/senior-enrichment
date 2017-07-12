import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses
  };
}

function AllCampuses(props) {
  return (
    <div>
      <h1>Campuses:</h1>
      <ul>
        {props.campuses.map((campus) => {
          return (
            <Link to={`/campuses/${campus.id}`} key={campus.id} value={campus}>{campus.name}</Link>
          );
        })}
      </ul>
    </div>
  );
}
const Container = connect(mapStateToProps)(AllCampuses);
export default Container;
