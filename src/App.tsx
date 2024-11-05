import './App.css';
import { PokemonList } from './components/list/PokemonList.component';
import { useEffect, useState } from 'react';
import { useApiPokemon } from './service/util';
import { useGlobalSelector, GlobalDispatch } from './store';
import { useDispatch } from 'react-redux';
import { setSearch, setPokemonList } from './store/actions';
import { selectSearch, selectPokemonList, selectPokemonsReadyToFight } from './store/selectors';

export const App = () => {
  const styleClass = {
    "pokemon-list": "pokemon-list",
    "combat-list": "combat-list",
  };

  const dispatch: GlobalDispatch = useDispatch();

  const search = useGlobalSelector(selectSearch);
  const pokemonList = useGlobalSelector(selectPokemonList);
  const pokemonsReadyToFight = useGlobalSelector(selectPokemonsReadyToFight);

  const [inputText, setInputText] = useState<string>(search);
  const { listPokemonData, error, loading } = useApiPokemon();

  useEffect(() => {
    dispatch(setPokemonList(listPokemonData || []));
  }, [listPokemonData, dispatch]);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);
    dispatch(setSearch(value));
  };

  const pokemonFiltered = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputText.toLowerCase())
  );

  return (
    <div className="container">
      <section className='main-section'>
        <div className="search">
          <input
            type="text"
            placeholder="Que pokemon buscas..."
            value={inputText}
            onChange={handlerInput}
          />
          <PokemonList
            styleClass={styleClass['pokemon-list']}
            pokemonList={pokemonFiltered ?? []}
          />
        </div>
      </section>

      <section className="combat-section">
        <h2>LISTOS PARA EL COMBATE</h2>
        {pokemonsReadyToFight.length === 0 ? (
          <div className='combat-section-empty-list'>
            <p>Lista vacia, no hay ningún pokemon listo</p>
          </div>
        ) : (
          <PokemonList
            styleClass={styleClass['combat-list']}
            pokemonList={pokemonsReadyToFight.map(pokemon => ({
              ...pokemon,
              isInReadyToFight: true,
            }))}
          />
        )}
      </section>
    </div>
  );
}
