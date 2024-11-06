import { IGlobalState } from "../interfaces/IStoreInterface";
import {
  ActionTypes,
  SET_SEARCH,
  SET_POKEMON_LIST,
  ADD_TO_POKEMON_LIST,
  REMOVE_TO_POKEMON_LIST,
  DELETE_ALL_POKEMON,
} from "./actions";

const initialState: IGlobalState = {
  pokemonList: [],
  pokemonsReadyToFight: [],
  search: "",
};

export function reducer(
  state = initialState,
  action: ActionTypes
): IGlobalState {
  switch (action.type) {
    case SET_SEARCH: {
      return { ...state, search: action.payload };
    }
    case SET_POKEMON_LIST: {
      return { ...state, pokemonList: [...action.payload] };
    }
    case ADD_TO_POKEMON_LIST: {
      const isAlreadyInFight = state.pokemonsReadyToFight.some(
        (pokemon) => pokemon.name === action.payload.name
      );

      if (isAlreadyInFight) {
        return state;
      }
      const updatedPokemon = { ...action.payload, ready: true };
      const pokemonsReadyToFight =
        state.pokemonsReadyToFight.length < 6
          ? [...state.pokemonsReadyToFight, updatedPokemon]
          : state.pokemonsReadyToFight;
      return { ...state, pokemonsReadyToFight };
    }
    case REMOVE_TO_POKEMON_LIST: {
      return {
        ...state,
        pokemonsReadyToFight: state.pokemonsReadyToFight.filter(
          (pokemon) => pokemon.name !== action.payload.name
        ),
      };
    }
    case DELETE_ALL_POKEMON: {
      return { ...state, pokemonsReadyToFight: [] };
    }
    default:
      return state;
  }
}
