import './App.css'
import { Input } from './components/input/Input.comonent';
import { PokemonList } from './components/list/PokemonList.component';
import dbList from '../src/db/pokemons.json';
import { IPokemon } from './interfaces/IPokemons';

export const App = () => {
  const styleClass = {
    "pokemon-list": "pokemon-list",
    "combat-list": "combat-list",
  }

  const pokemonList: IPokemon[] = dbList.map(pokemon => ({
    ...pokemon,
    baseStats: {
      attack: pokemon["base-stats"].attack,
      defend: pokemon["base-stats"].defend,
      specialAttack: pokemon["base-stats"]["special-attack"],
      specialDefend: pokemon["base-stats"]["special-defend"],
      speed: pokemon["base-stats"].speed,
    }
  }));

  return (
    <>
      <div className="container">
        <section className='main-section'>
          <div className="search">
            <Input />
            <PokemonList styleClass={styleClass['pokemon-list']} pokemonList={pokemonList} />
          </div>
        </section>
        <section className="combat-section">
          <h2>LISTOS PARA EL COMBATE</h2>
          <PokemonList styleClass={styleClass['combat-list']} pokemonList={pokemonList} />
        </section>
      </div>
    </>
  )
}
