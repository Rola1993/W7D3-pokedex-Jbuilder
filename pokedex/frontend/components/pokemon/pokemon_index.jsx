import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    debugger;
    // const pokemon = this.props.pokemon.map((el=> <li key= {el.id}>{el}</li>);

    return (
      <div>
          <ul>
          </ul>
      </div>);
  }
}

export default PokemonIndex;
