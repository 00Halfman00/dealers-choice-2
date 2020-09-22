import React, { Component } from 'react';
import { render } from 'react-dom';
import store, { readFellows } from './store';
import Fellows from './components/Fellows.js';
import { Provider, connect } from 'react-redux';
import CreateFellow from './components/CreateFellow';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class _App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.load();
  }
  render() {
    
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/fellows'>Fellows ({this.props.count})</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route path="/create" exact component={CreateFellow}/>
          <Route path="/fellows" exact component={Fellows} />
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
    return {
       load: ()=>dispatch(readFellows())
      }
  }
)(_App);

render(
  <Provider store={store}>
    <h2>Howdy</h2>
    <App />
  </Provider>,
  document.querySelector('#app')
);
