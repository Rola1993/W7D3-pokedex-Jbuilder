// the reducer is only concerned with describing how the state changes as a result
// of a dispatched action. It takes two parameters: the previous state and the action
// dispatched. It should return the new state, without mutating the previous state.
//If the reducer doesn't care about the action being dispatched, it should return state.
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      // action.pokemon.forEach( pokemon => {
      //   nextState[pokemon.id] = pokemon;
      // });
      return merge({}, state, action.pokemon);
    default:
      return state;
  }
};


export default pokemonReducer;
