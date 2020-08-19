import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import { combineReducers, createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import orderReducer from './store/order'

const rootReducer = combineReducers({
  order: orderReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


