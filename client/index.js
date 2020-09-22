import React, { Component } from 'react';
import { render } from 'react-dom';
import store, { readFellows } from './store';
import Fellows from './components/Fellows.js';
import { Provider, connect } from 'react-redux';
import CreateFellow from './components/CreateFellow';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import UpdateDelete from './components/UpdateDelete';

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
            <li>
              <Link to='/create'>Create Fellow</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route path="/create"  component={CreateFellow}/>
          <Route path="/fellows" exact component={Fellows} />
          <Route path="/fellows/:id"  component={UpdateDelete}/>
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
    <h2>your welcome</h2>
    <App />
  </Provider>,
  document.querySelector('#app')
);
