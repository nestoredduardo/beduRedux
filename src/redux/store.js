/* eslint-disable comma-dangle */
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './users/userReducer';

import { getUsers } from './users/userActions';

const rootReducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  getUsers()(store.dispatch, store.getState);
  return store;
};

export default generateStore;
