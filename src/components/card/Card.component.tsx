import { IResult } from '../../interfaces/IPokemons';
import './card.css';
import { useApiServiceByNameOrId } from '../../service/apiService';

export const Card = ({ name }: IResult) => {
  const { error, loading, pokemonData } = useApiServiceByNameOrId(name)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="card">
        <span className="plus-icon">+</span>
        <img className="img-placeholder" src={pokemonData?.sprites.front_default} alt={name} />
      </div>
      <div className="card-name">{name.toUpperCase()}</div>
    </div>
  );
};
