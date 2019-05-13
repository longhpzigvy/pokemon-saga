import {
  all, takeEvery, select,
  call, put, delay,
  takeLatest,
} from 'redux-saga/effects';
import {
  POKEMON_FETCH_START,
  POKEMON_SELECT_POKEMON,
  fetchPokemonSuccess,
  getPokemonList,
  fetchPokemonInfoSuccess
} from '../../reducers/pokemon';

function* fetchPokemonList(action) {
  const res = yield call(fetch, 'https://pokeapi.co/api/v2/pokemon');
  const json = yield call([res, 'json']);
  const { results, prev, next } = json;

  // yield delay(2500);
  yield put(fetchPokemonSuccess(results, next, prev));
}

function* fetchPokemonInfo(action) {
  try {
    const { payload } = action;
    const { index } = payload;
    const pokemonList = yield select(getPokemonList);
    const pokemon = pokemonList[index];
    const res = yield call(fetch, pokemon.url);
    const pokemonInfo = yield call([res, 'json']);

    // yield delay(2500);
    yield put(fetchPokemonInfoSuccess(pokemonInfo));
  } catch (error) {
    console.log(error);
  }
}

function* watchFetchPokemonList() {
  yield takeEvery(POKEMON_FETCH_START, fetchPokemonList);
}

function* watchFetchPokemonInfo() {
  yield takeLatest(POKEMON_SELECT_POKEMON, fetchPokemonInfo);
}

function* pokemonSaga() {
  yield all([
    watchFetchPokemonList(),
    watchFetchPokemonInfo(),
  ]);
}

export default pokemonSaga;
