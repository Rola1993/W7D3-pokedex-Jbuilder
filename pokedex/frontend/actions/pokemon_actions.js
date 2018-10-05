import * as PokemonAPIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

//action creator which returns an object
export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

// async action creator which returns a function
export const requestAllPokemon = () => (dispatch) => (
  PokemonAPIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
