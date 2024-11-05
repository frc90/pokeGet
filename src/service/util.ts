import { useState, useEffect } from "react";
import { IResult, IPokemonSimplified } from "../interfaces/IPokemons";
import { useApiServiceAllPokemon } from "./apiService";

export const useApiPokemon = () => {
  const { allPokemon, error, loading } = useApiServiceAllPokemon();
  const [pokemonList, setPokemonList] = useState<IResult[] | null>(null);
  const [listPokemonData, setListPokemonData] = useState<IPokemonSimplified[]>(
    []
  );

  useEffect(() => {
    if (allPokemon?.results) {
      setPokemonList(allPokemon.results);
    }
  }, [allPokemon]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (pokemonList) {
        const fetchedData = await Promise.all(
          pokemonList.map((pokemon) => fetchPokemonSimplifiedData(pokemon.name))
        );
        setListPokemonData(fetchedData);
      }
    };

    fetchPokemonData();
  }, [pokemonList]);

  return {
    listPokemonData,
    error,
    loading,
  };
};

const fetchPokemonSimplifiedData = async (
  name: string
): Promise<PokemonSimplified> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonData = await response.json();

  return {
    image: pokemonData.sprites.other?.["official-artwork"].front_default || "",
    name: pokemonData.name,
    number: pokemonData.id,
    height: pokemonData.height,
    types: pokemonData.types.map((typeInfo: any) => typeInfo.type.name),
    baseStats: {
      attack:
        pokemonData.stats.find((stat: any) => stat.stat.name === "attack")
          ?.base_stat || 0,
      defense:
        pokemonData.stats.find((stat: any) => stat.stat.name === "defense")
          ?.base_stat || 0,
      specialAttack:
        pokemonData.stats.find(
          (stat: any) => stat.stat.name === "special-attack"
        )?.base_stat || 0,
      specialDefense:
        pokemonData.stats.find(
          (stat: any) => stat.stat.name === "special-defense"
        )?.base_stat || 0,
      speed:
        pokemonData.stats.find((stat: any) => stat.stat.name === "speed")
          ?.base_stat || 0,
    },
  };
};
