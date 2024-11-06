import { Card } from "../card/Card.component";
import { IPokemonListProps, IPokemonSimplified } from '../../interfaces/IPokemons';
import { useDispatch } from 'react-redux';
import { addToPokemonList, removeToPokemonList } from '../../store/actions';

export const PokemonList = ({ styleClass, pokemonList, onPokemonClick }: IPokemonListProps) => {
  const dispatch = useDispatch();

  const handleAddPokemon = (pokemon: IPokemonSimplified) => {
    dispatch(addToPokemonList(pokemon));
  };

  const handleRemovePokemon = (pokemon: IPokemonSimplified) => {
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
          isInReadyToFight={pokemon.ready}  // Aquí se pasa si el Pokémon está listo para pelear
          onClick={() => onPokemonClick(pokemon.name)} // Llama a la función para ver detalles
        />
      ))}
    </div>
  );
};
