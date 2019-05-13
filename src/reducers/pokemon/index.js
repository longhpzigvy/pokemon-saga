export const POKEMON_FETCH_START = 'pokemon/FETCH_START';
export const POKEMON_FETCH_SUCCESS = 'pokemon/FETCH_SUCCESS';
export const POKEMON_FETCH_FAILED = 'pokemon/FETCH_FAILED';

export const POKEMON_SELECT_POKEMON = 'pokemon/SELECT_POKEMON';
export const POKEMON_FETCH_POKEMON_SUCCESS = 'pokemon/FETCH_POKEMON_SUCCESS';
export const POKEMON_FETCH_POKEMON_FAILED = 'pokemon/FETCH_POKEMON_FAILED';

// action creators

export const startFetchPokemon = () => ({
  type: POKEMON_FETCH_START,
});

export const fetchPokemonSuccess = (pokemonList, next, prev) => ({
  type: POKEMON_FETCH_SUCCESS,
  payload: {
    pokemonList,
    next,
    prev,
  }
});

export const fetchPokemonFailed = (errorMessage) => ({
  type: POKEMON_FETCH_FAILED,
  payload: {
    errorMessage,
  }
});

export const fetchPokemonInfoSuccess = (currentPokemon) => ({
  type: POKEMON_FETCH_POKEMON_SUCCESS,
  payload: {
    currentPokemon
  }
});

export const fetchPokemonInfoFailed = (errorMessagePokemon) => ({
  type: POKEMON_FETCH_POKEMON_FAILED,
  payload: {
    errorMessagePokemon,
  }
});

export const selectPokemon = (index) => ({
  type: POKEMON_SELECT_POKEMON,
  payload: {
    index,
  }
})

// ========================

const initialState = {
  pokemonList: [],
  isLoading: false,
  errorMessage: null,
  next: null,
  prev: null,
  isLoadingPokemon: false,
  errorMessagePokemon: null,
  currentPokemon: {},
};

function pokemonReducer(state = initialState, action) {
  switch(action.type) {
    case POKEMON_FETCH_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case POKEMON_FETCH_SUCCESS: {
      const {
        pokemonList,
        next,
        prev,
      } = action.payload;
      return {
        ...state,
        pokemonList,
        next,
        prev,
        isLoading: false,
      }
    }
    case POKEMON_FETCH_FAILED: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        errorMessage,
        isLoading: false,
      }
    }
    case POKEMON_SELECT_POKEMON: {
      const { index } = action.payload;
      return {
        ...state,
        isLoadingPokemon: true,
      }
    }
    case POKEMON_FETCH_POKEMON_SUCCESS: {
      const { currentPokemon } = action.payload;
      return {
        ...state,
        currentPokemon,
        isLoadingPokemon: false,
      }
    }
    case POKEMON_FETCH_POKEMON_FAILED: {
      const { errorMessagePokemon } = action.payload;
      return {
        ...state,
        errorMessagePokemon,
        isLoadingPokemon: false,
      }
    }
    default: return state;
  }
}

// selector

export const getPokemonList = (state) => {
  const { pokemon } = state;
  return pokemon.pokemonList;
}

export const getIsLoading = (state) => {
  const { pokemon } = state;
  return pokemon.isLoading;
}

export const getErrorMessage = (state) => {
  const { pokemon } = state;
  return pokemon.errorMessage;
}

export const getIsLoadingPokemon = ({ pokemon }) => pokemon.isLoadingPokemon;

export const getCurrentPokemon = ({ pokemon }) => pokemon.currentPokemon;

export default pokemonReducer;
