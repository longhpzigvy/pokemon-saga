import React from 'react';
import PropTypes from 'prop-types';

const PokemonInfo = ({ pokemon, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        Fetching data from Amurica
      </div>
    )
  };
  if (pokemon.name === undefined) {
    return (
      <div>
        Select a pokemon please?
      </div>
    )
  }
  console.log(pokemon);
  return (
    <div>
      <div>{`Name: ${pokemon.name}`}</div>
      <div>{`Weight: ${pokemon.weight}`}</div>
      <div>{`Height: ${pokemon.height}`}</div>
      <div>{`Experience: ${pokemon.base_experience}`}</div>
    </div>
  )
}

PokemonInfo.propTypes = {
  pokemon: PropTypes.object,
  isLoading: PropTypes.bool,
}

PokemonInfo.defaultProps = {
  pokemon: {},
  isLoading: false,
}

export default PokemonInfo;
