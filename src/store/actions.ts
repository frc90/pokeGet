import { IPokemonSimplified } from "../interfaces/IPokemons";

export const SET_SEARCH = "SET_SEARCH";
export const SET_POKEMON_LIST = "SET_POKEMON_LIST";
export const ADD_TO_POKEMON_LIST = "ADD_TO_POKEMON_LIST";
export const REMOVE_TO_POKEMON_LIST = "REMOVE_TO_POKEMON_LIST";
export const DELETE_ALL_POKEMON = "DELETE_ALL_POKEMON";

export const setSearch = (payload: string) => ({
  type: "SEARCH",
  payload: payload,
});

export const setPokemonList = (payload: IPokemonSimplified[]) => ({
  type: SET_POKEMON_LIST,
  payload: payload,
});

export const addToPokemonList = (payload: IPokemonSimplified) => ({
  type: ADD_TO_POKEMON_LIST,
  payload: payload,
});

export const removeToPokemonList = (payload: IPokemonSimplified) => ({
  type: REMOVE_TO_POKEMON_LIST,
  payload: payload,
});

export const deleteAllPokemonList = () => ({
  type: DELETE_ALL_POKEMON,
});

export type ActionTypes =
  | ReturnType<typeof setSearch>
  | ReturnType<typeof setPokemonList>
  | ReturnType<typeof addToPokemonList>
  | ReturnType<typeof removeToPokemonList>
  | ReturnType<typeof deleteAllPokemonList>;
