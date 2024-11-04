import { Card } from "../card/Card.component"
import { IPokemonListProps } from '../../interfaces/IPokemons';

export const PokemonList = ({ styleClass, pokemonList }: IPokemonListProps) => {
  return (
    <div className={styleClass}>
      {pokemonList.map((pokemon, index) => (
        <Card key={index} {...pokemon} />
      ))}
    </div>
  )
}

