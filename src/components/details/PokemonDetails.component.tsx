import { IPokemonSimplified } from '../../interfaces/IPokemons';
import './details.css';

interface PokemonDetailsProps {
  pokemon: IPokemonSimplified;
  onBack: () => void;
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onBack }) => (
  <div className='detail-container'>
    <div className="header">
      <button onClick={onBack}>Volver a la Lista</button>
      <button disabled>Agregar a la lista</button>
    </div>

    <div className="image-container">
      <img src={pokemon.image} alt={pokemon.name} />
    </div>

    <div className="details">
      <h1>Detalles de {pokemon.name}</h1>

      <p>Número: {pokemon.number}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Tipos: {pokemon.types.join(', ')}</p>
      <h2>Estadísticas Base</h2>
      <ul>
        <ol>Ataque: {pokemon.baseStats.attack}</ol>
        <ol>Defensa: {pokemon.baseStats.defense}</ol>
        <ol>Ataque Especial: {pokemon.baseStats.specialAttack}</ol>
        <ol>Defensa Especial: {pokemon.baseStats.specialDefense}</ol>
        <ol>Velocidad: {pokemon.baseStats.speed}</ol>
      </ul>
    </div>

  </div>
);






