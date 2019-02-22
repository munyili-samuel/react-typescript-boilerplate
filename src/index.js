import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import './index.css';
import App from './App';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
