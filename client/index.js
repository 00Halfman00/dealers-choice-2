import React, { Component } from 'react';
import { render } from 'react-dom';
import store, { readFellows } from './store';
import Fellows from './components/Fellows.js';
import { Provider, connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

class _App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.load;
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Fellows} />
        </div>
      </Router>
    );
  }
}

const App = connect(
  ({ fellows }) => {
    return { count: fellows.length };
  },
  (dispatch) => {
    return { load: dispatch(readFellows()) }
  }
)(_App);

render(
  <Provider store={store}>
    <h2>Howdy</h2>
    <App />
  </Provider>,
  document.querySelector('#app')
);
