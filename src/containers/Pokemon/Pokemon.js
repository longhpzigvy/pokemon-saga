import { connect } from 'react-redux';
import Pokemon from '../../components/Pokemon';
import {
  getPokemonList,
  startFetchPokemon,
  getIsLoading,
  selectPokemon,
} from '../../reducers/pokemon';

const mapStateToProps = (state) => ({
  pokemonList: getPokemonList(state),
  isLoading: getIsLoading(state),
})

const mapDispatchToProps = {
  startFetchPokemon,
  selectPokemon,
}


export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
