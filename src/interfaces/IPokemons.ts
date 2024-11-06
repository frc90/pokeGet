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
  pokemonList: IPokemonSimplified[];
  onPokemonClick: (pokemonName: string) => void;
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
}

export interface IPokemonSimplified {
  image: string;
  name: string;
  number: number;
  height: number;
  types: string[];
  ready: boolean;
  baseStats: {
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}
