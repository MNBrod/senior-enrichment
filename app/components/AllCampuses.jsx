import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, fetchCampuses, setCurrentCampus } from '../thunks/';


class AllCampuses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    //let campuses = [{name: 'Fullstack', id: 1}];
    return (
      <div>
        <h1>Campuses:</h1>
        <ul>
          {this.props.campuses.map((campus) => {
            return (
              <div key={campus.id}>
                <Link to={`/campuses/${campus.id}`} value={campus}>{campus.name}</Link>
              </div>
            );
          })}
          <h3>New Campus:</h3>
          <form>
            <div>
              <lable>Campus Name</lable>
              <input name="title" type="text" />
            </div>
            <div>
              <label>Image URL:</label>
              <input name="imageUrl" type="text" />
            </div>
          </form>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses
  };
}


const mapDispatch = { addCampus, fetchCampuses };

const Container = connect(mapStateToProps, mapDispatch)(AllCampuses);
export default Container;
