import { IGlobalState } from "../interfaces/IStoreInterface";

export const selectSearch = (state: IGlobalState) => state.search;
export const selectPokemonList = (state: IGlobalState) => state.pokemonList;
export const selectPokemonsReadyToFight = (state: IGlobalState) =>
  state.pokemonsReadyToFight;
