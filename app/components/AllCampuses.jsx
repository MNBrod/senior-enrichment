import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NewCampus from './NewCampus.jsx';
import { addCampus, fetchCampuses, updateCampusText, postCampus, deleteCampus } from '../thunks/';


class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampuses();
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
          <div className="list-group-item col-sm-4">
            <div className="media">
              <div className="media-left">
                <img
                src="https://cdn3.iconfinder.com/data/icons/education/512/academy-512.png"
                className="media-object img-circle"
                width="30px" />
              </div>
              <div className="media-body">
                <Link to={'/campuses/new'}>New Campus</Link>
              </div>
            </div>
          </div>
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
