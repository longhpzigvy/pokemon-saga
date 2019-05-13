import { connect } from 'react-redux';
import PokemonInfo from '../../components/PokemonInfo';
import {
  getCurrentPokemon,
  getIsLoadingPokemon,
} from '../../reducers/pokemon';

const mapStateToProps = (state) => ({
  pokemon: getCurrentPokemon(state),
  isLoading: getIsLoadingPokemon(state),
});

export default connect(mapStateToProps)(PokemonInfo);
