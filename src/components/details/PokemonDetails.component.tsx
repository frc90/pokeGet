import { IPokemonSimplified } from '../../interfaces/IPokemons';

interface PokemonDetailsProps {
  pokemon: IPokemonSimplified;
  onBack: () => void;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onBack }) => (
  <div>
    <button onClick={onBack}>Volver a la Lista</button>
    <h1>Detalles de {pokemon.name}</h1>
    <img src={pokemon.image} alt={pokemon.name} />
    <p>Número: {pokemon.number}</p>
    <p>Altura: {pokemon.height}</p>
    <p>Tipos: {pokemon.types.join(', ')}</p>
    <h2>Estadísticas Base</h2>
    <ul>
      <li>Ataque: {pokemon.baseStats.attack}</li>
      <li>Defensa: {pokemon.baseStats.defense}</li>
      <li>Ataque Especial: {pokemon.baseStats.specialAttack}</li>
      <li>Defensa Especial: {pokemon.baseStats.specialDefense}</li>
      <li>Velocidad: {pokemon.baseStats.speed}</li>
    </ul>
  </div>
);
