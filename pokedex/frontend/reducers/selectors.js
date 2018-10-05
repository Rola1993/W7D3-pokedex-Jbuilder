// Selectors are functions that are used to "select" complex pieces of the state.
import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};


//test:
// const initialState = getState();
// selectAllPokemon(initialState); //=> []
//
// dispatch(requestAllPokemon());
//
// const populatedState = getState();
// selectAllPokemon(populatedState); //=> array of pokemon objects!
