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
  pokemonList: IPokemon[];
}
