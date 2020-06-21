import { createStore, applyMiddleware, compose } from 'redux';
import reduxthunk from 'redux-thunk';
import Reducers from './reducers';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducers,
  initialState,
  composeEnhancers(applyMiddleware(reduxthunk))
);

export default store;