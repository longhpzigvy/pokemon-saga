import React from 'react';
import { Provider } from 'react-redux';
import Pokemon from './containers/Pokemon';
import PokemonInfo from './containers/PokemonInfo';
import configureStore from './store';

const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          width: '50vw',
          justifyContent: 'space-between',
        }}
      >
        <Pokemon />
        <PokemonInfo />
      </div>
    </Provider>
  );
}

export default App;
