import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCampus, fetchCampuses, updateCampusText, postCampus, deleteCampus } from '../thunks/';


class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
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
    })
      .then(() => this.props.fetchCampuses())
      .then(() => {
        this.props.updateCampusText({
          name: '',
          imageUrl: ''
        });
      });
  }
  handleRemoveButton(event) {
    console.log('event:', event.target.value);
    let campus = this.props.campuses.filter(element => +element.id === +event.target.value)[0];
    console.log('CAMPUS:', campus);
    this.props.deleteCampus(campus)
      .then(() => this.props.fetchCampuses());
  }

  render() {
    return (
      <div className="container">
        <h1>Campuses:</h1>
        <div>
          {this.props.campuses.map((campus) => {
            return (
              <div className="list-group-item col-sm-4" key={campus.id}>
                <div className="media">
                  <div className="media-left">
                    <img src={campus.imageUrl} width="30px" className="media-object img-circle" />
                  </div>
                  <div className="media-body">
                    <Link to={`/campuses/${campus.id}`} value={campus}>{campus.name}</Link>
                  </div>
                  <div className="media-right">
                    <button onClick={this.handleRemoveButton} value={campus.id}>
                      DELETE
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <h3>New Campus:</h3>
          <form className="form-horizontal" onSubmit={this.handleTextSubmit}>
            <div className="form-group">
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
              <img src={this.props.campusText.imageUrl} />

              <button className="btn btn-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
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

const Container = connect(mapStateToProps, mapDispatch)(AllCampuses);
export default Container;
