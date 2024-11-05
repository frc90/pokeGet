import { Card } from "../card/Card.component"
import { IPokemonListProps, IPokemonSimplified } from '../../interfaces/IPokemons';
import { useDispatch } from 'react-redux';
import { addToPokemonList, removeToPokemonList } from '../../store/actions';

export const PokemonList = ({ styleClass, pokemonList }: IPokemonListProps) => {
  const dispatch = useDispatch();

  const handleAddPokemon = (pokemon: IPokemonSimplified) => {
    console.log('Adding:', pokemon);
    dispatch(addToPokemonList(pokemon));
  };

  const handleRemovePokemon = (pokemon: IPokemonSimplified) => {
    console.log('Removing:', pokemon);
    dispatch(removeToPokemonList(pokemon));
  };

  return (
    <div className={styleClass}>
      {pokemonList.map((pokemon, index) => (
        <Card
          key={index}
          {...pokemon}
          onAdd={() => handleAddPokemon(pokemon)}
          onRemove={() => handleRemovePokemon(pokemon)}
          isInReadyToFight={pokemon.ready}
        />
      ))}
    </div>
  )
}
