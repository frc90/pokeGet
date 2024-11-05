import { IPokemonSimplified } from "./IPokemons";

export interface IGlobalState {
  pokemonList: IPokemonSimplified[];
  pokemonsReadyToFight: IPokemonSimplified[];
  search: string;
}
