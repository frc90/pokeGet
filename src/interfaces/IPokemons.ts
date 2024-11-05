export interface IBaseStats {
  attack: string;
  defend: string;
  specialAttack: string;
  specialDefend: string;
  speed: string;
}

export interface IPokemon {
  image: string;
  name: string;
  number: string;
  height: string;
  type: string;
  baseStats: IBaseStats;
}

export interface IPokemonListProps {
  styleClass: string;
  pokemonList: PokemonSimplified[];
}

export interface IPokemonResult {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
}

export interface IResult {
  name: string;
  url: string;
}

export interface IPokemonData {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  sprites: { front_default: string };
  // Agrega más propiedades según necesites
}

export interface PokemonSimplified {
  image: string;
  name: string;
  number: number;
  height: number;
  types: string[];
  baseStats: {
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}
