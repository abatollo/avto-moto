import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from '@redux-devtools/extension';

import {reducer} from './store/reducer';

import {App} from './components/app/app.jsx';

import './scss/style.scss';

const store = createStore(
  reducer,
  composeWithDevTools()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
