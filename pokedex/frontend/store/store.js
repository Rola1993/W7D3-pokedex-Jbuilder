import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';
//Redux's createStore function accepts the following parameters:
//the reducer, an optional preloadedState, and any enhancers like as middleware.

// const configureStore = () => createStore(rootReducer, applyMiddleware(logger));
const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
//configureStore Pattern
//instead of just exporting the store, we are exporting a function that creates
//and returns a store. This can be used in the future to swap out reducers,
// preloadedState, or enhancers depending on different conditions
//(e.g. development vs production environments).
