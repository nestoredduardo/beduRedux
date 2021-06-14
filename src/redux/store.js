/* eslint-disable comma-dangle */
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './users/userReducer';
import publicationReducer from './publications/publicationReducers';

import { getUsers } from './users/userActions';

const rootReducer = combineReducers({
  user: userReducer,
  publication: publicationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  getUsers()(store.dispatch, store.getState);
  return store;
};

export default generateStore;
