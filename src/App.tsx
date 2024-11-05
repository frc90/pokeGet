import './App.css'
import { PokemonList } from './components/list/PokemonList.component';
import { useApiServiceAllPokemon } from '../src/service/apiService';
import { useEffect, useState } from 'react';
import { IResult } from './interfaces/IPokemons';

export const App = () => {
  const styleClass = {
    "pokemon-list": "pokemon-list",
    "combat-list": "combat-list",
  }

  const [inputText, setInputText] = useState<string>('')
  const { allPokemon, error, loading } = useApiServiceAllPokemon()
  const [pokemonList, setPokemonList] = useState<IResult[] | null>(null);
  const [pokemonRTC, setPokemonRTC] = useState([])

  useEffect(() => {
    if (allPokemon?.results) {
      setPokemonList(allPokemon.results);
    }
  }, [allPokemon]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const pokemonFiltered = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputText?.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <section className='main-section'>
          <div className="search">
            <input type="text" placeholder="Que pokemon buscas..." onChange={handlerInput} />
            {pokemonList && (
              <PokemonList styleClass={styleClass['pokemon-list']} pokemonList={pokemonFiltered ?? []} />
            )}
          </div>
        </section>
        <section className="combat-section">
          <h2>LISTOS PARA EL COMBATE</h2>
          {pokemonRTC.length == 0 ?
            (<div className='combat-section-empty-list'>
              <p>Lista vacia no ningun pokemon listo</p>
            </div>)
            : (
              <PokemonList styleClass={styleClass['pokemon-list']} pokemonList={pokemonRTC} />
            )}
        </section>
      </div>
    </>
  )
}
