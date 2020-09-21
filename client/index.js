import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main.js';
//import store from '/store';

render(
  <Provider store={store}>
    <h2>Howdy</h2>
    <Main />
  </Provider>,
  document.querySelector('#app')
);
