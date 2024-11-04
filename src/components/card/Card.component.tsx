import { IPokemon } from '../../interfaces/IPokemons';
import './card.css';
export const Card = ({ name, image }: IPokemon) => {
  return (
    <div>
      <div className="card">
        <span className="plus-icon">+</span>
        <img className="img-placeholder" src={image} />
      </div>
      <div className="card-name">{name.toUpperCase()}</div>
    </div>
  );
};
