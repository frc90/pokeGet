import { IPokemonSimplified } from '../../interfaces/IPokemons';
import './card.css';

interface CardProps extends IPokemonSimplified {
  onAdd: () => void;
  onRemove: () => void;
  isInReadyToFight: boolean;
}

export const Card: React.FC<CardProps> = ({ name, image, onAdd, onRemove, isInReadyToFight }) => {
  return (
    <div>
      <div className="card">
        <span className="plus-icon" onClick={isInReadyToFight ? onRemove : onAdd}>
          {isInReadyToFight ? '-' : '+'}
        </span>
        <img className="img-placeholder" src={image} alt={name} />
      </div>
      <div className="card-name">{name.toUpperCase()}</div>
    </div>
  );
};
