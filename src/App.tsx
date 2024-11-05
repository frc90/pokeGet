import './App.css'
import { PokemonList } from './components/list/PokemonList.component';
import { useState } from 'react';
import { useApiPokemon } from './service/util';

export const App = () => {
  const styleClass = {
    "pokemon-list": "pokemon-list",
    "combat-list": "combat-list",
  }

  const [inputText, setInputText] = useState<string>('')
  const { listPokemonData, error, loading } = useApiPokemon()

  const [pokemonRTC, setPokemonRTC] = useState([])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const pokemonFiltered = listPokemonData?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(inputText?.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <section className='main-section'>
          <div className="search">
            <input type="text" placeholder="Que pokemon buscas..." onChange={handlerInput} />
            {listPokemonData && (
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
