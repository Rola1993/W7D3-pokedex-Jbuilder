//  in charge of combining each of our entity sub-reducers (pokemonReducer and itemsReducer)
import pokemonReducer from './pokemon_reducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
});

export default entitiesReducer;
