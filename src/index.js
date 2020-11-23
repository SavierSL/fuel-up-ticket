/* eslint-disable prettier/prettier */

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';

import './index.scss';

import store from './Ticket/components/Redux/store';

const title = 'React with Webpack and Babel';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App title={title} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);

module.hot.accept();
