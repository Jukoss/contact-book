import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// import { BrowserRouter, Route, Link } from 'react-router-dom';

import configureStore from './store';

import './styles/styles.scss';

import App from './App';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);

ReactDOM.hydrate(
  (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);





