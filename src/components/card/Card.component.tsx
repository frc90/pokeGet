import { PokemonSimplified } from '../../interfaces/IPokemons';
import './card.css';

export const Card = ({ name, image }: PokemonSimplified) => {

  return (
    <div>
      <div className="card">
        <span className="plus-icon">+</span>
        <img className="img-placeholder" src={image} alt={name} />
      </div>
      <div className="card-name">{name.toUpperCase()}</div>
    </div>
  );
};
