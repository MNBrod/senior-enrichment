import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, fetchCampuses, updateCampusText, postCampus, deleteCampus } from '../thunks/';


class NewCampus extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
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
    })
      .then(() => this.props.fetchCampuses())
      .then(() => {
        this.props.updateCampusText({
          name: '',
          imageUrl: ''
        });
      });
    this.props.history.push('/campuses');
  }


  render() {
    return (

      <div>
        <h3>New Campus:</h3>
        <form className="form-horizontal" onSubmit={this.handleTextSubmit}>
          <div className="form-group col-sm-5">
            <label className="control-label">Campus Name: </label>
            <input
              value={this.props.campusText.name}
              name="name"
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
            />
            <label className="control-label">Image URL:</label>
            <input
              value={this.props.campusText.imageUrl}
              name="imageUrl"
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
            />
            <div>
              <img src={this.props.campusText.imageUrl} />
            </div>
            <button className="btn btn-submit" type="submit">Submit</button>
          </div>
        </form>
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


const mapDispatch = { addCampus, fetchCampuses, updateCampusText, postCampus, deleteCampus };

const Container = connect(mapStateToProps, mapDispatch)(NewCampus);
export default Container;
