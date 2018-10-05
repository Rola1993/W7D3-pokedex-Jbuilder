//Container components (i.e. containers) are concerned with subscribing to the
//store, reading from state, and passing down necessary props to presentational components.
import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  // dispatch requestAllPokemon action.
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
// Both functions are invoked when our redux store updates. They are responsible
//for determining and constructing the props that are passed to presentational component.
