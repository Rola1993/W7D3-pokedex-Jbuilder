//Before we can use our entities, create a rootReducer using Redux's combineReducers function.
//We'll use combineReducers to generate our application state and assign each slice of the state to
//a different reducer. This will make it easier to grow our application state.
import entitiesReducer from './entities_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;
