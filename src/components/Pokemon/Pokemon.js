import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  componentDidMount() {
    const { startFetchPokemon } = this.props;
    startFetchPokemon();
  }

  render() {
    const {
      pokemonList, isLoading,
      selectPokemon,
    } = this.props;
    if (isLoading) {
      return (
        <div>
          Getting visa qua my
        </div>
      )
    }
    return (
      <div>
        <div>
          {`Pokemon: ${pokemonList.length}`}
        </div>
        <div>
          {pokemonList.map((pokemon, index) => (
            <div onClick={() => selectPokemon(index)}>
              {pokemon.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemonList: PropTypes.array,
  startFetchPokemon: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Pokemon.defaultProps = {
  pokemonList: [],
  isLoading: false,
};

export default Pokemon;
