import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, fetchCampuses, updateCampusText, updateCampus } from '../thunks/';

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newCampus;
    if (this.props.campusText.name !== '') {
      if (this.props.campusText.imageUrl !== '') {
        newCampus = {
          name: this.props.campusText.name,
          imageUrl: this.props.campusText.imageUrl
        };
      } else {
        newCampus = {
          name: this.props.campusText.name,
          imageUrl: this.props.campus.imageUrl
        };
      }
    } else if (this.props.campusText.imageUrl !== '') {
      newCampus = {
        name: this.props.campus.name,
        imageUrl: this.props.campusText.imageUrl
      };
    } else {
      newCampus = {
        name: this.props.campusText.name,
        imageUrl: this.props.campus.imageUrl
      };
    }
    console.log('New Campus:', newCampus);
    this.props.updateCampus(this.props.campus, newCampus);
    this.props.fetchCampuses();
    this.props.updateCampusText({
      name: '',
      imageUrl: ''
    });

  }

  handleChange(event) {
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

  render() {
    return (
      <div>
        <h2>Edit Campus:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input name="name" type="text" value={this.props.campusText.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Image URL: </label>
            <input name="imageUrl" type="text" value={this.props.campusText.imageUrl} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    campuses: state.campuses,
    campusText: state.campusText,
    history: ownProps.history,
    campus: ownProps.campus
  };
}


const mapDispatch = { addCampus, fetchCampuses, updateCampusText, updateCampus };

const Container = connect(mapStateToProps, mapDispatch)(UpdateCampus);
export default Container;
