import {
  all,
} from 'redux-saga/effects';
import pokemonSaga from './pokemon';

function* rootSagas() {
  yield all([
    pokemonSaga(),
  ]);
}

export default rootSagas;
