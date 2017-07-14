'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './components/AllCampuses.jsx';
import AllStudents from './components/AllStudents.jsx';
import SingleStudent from './components/SingleStudent.jsx';
import SingleCampus from './components/SingleCampus.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import store from './store';
// import Root from './components/Root';

render(
  <Provider store={store}>
    <div>
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/campuses/:id" component={SingleCampus} />
          <Route exact path="/" component={Home} />
        </Switch>
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('main')
);
