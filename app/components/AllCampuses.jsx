import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, fetchCampuses, updateCampusText, postCampus } from '../thunks/';


class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampuses();
  }

  handleTextChange(event) {
    if (event.target.name === 'name') {
      this.props.updateCampusText({
        name: event.target.value,
        imageUrl: this.props.campusText.imageUrl
      });
    }
    else {
      this.props.updateCampusText({
        name: this.props.campusText.name,
        imageUrl: event.target.value
      });
    }
  }

  handleTextSubmit(event) {
    event.preventDefault();
    this.props.postCampus({
      name: this.props.campusText.name,
      imageUrl: this.props.campusText.imageUrl
    });
    this.props.fetchCampuses();
    this.props.updateCampusText({
      name: '',
      imageUrl: ''
    });

  }

  render() {
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
          <form onSubmit={this.handleTextSubmit}>
            <div>
              <lable>Campus Name</lable>
              <input
                value={this.props.campusText.name}
                name="name"
                type="text"
                onChange={this.handleTextChange}
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                value={this.props.campusText.imageUrl}
                name="imageUrl"
                type="text"
                onChange={this.handleTextChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    campusText: state.campusText,
    history: ownProps.history
  };
}


const mapDispatch = { addCampus, fetchCampuses, updateCampusText, postCampus };

const Container = connect(mapStateToProps, mapDispatch)(AllCampuses);
export default Container;
