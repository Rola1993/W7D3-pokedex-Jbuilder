// The function should make an AJAX request that will make a http request to our PokemonController#index endpoint.
export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);
