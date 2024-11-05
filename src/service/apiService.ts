import { useEffect, useState } from "react";
import { IPokemonData, IPokemonResult } from "../interfaces/IPokemons";

const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const CALL_LIMIT = "?limit=151";

export const useApiServiceAllPokemon = () => {
  const [allPokemon, setAllPokemon] = useState<IPokemonResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${POKEMON_API_BASE_URL}${CALL_LIMIT}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setAllPokemon(data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { allPokemon, loading, error };
};

export const useApiServiceByNameOrId = (pokemonNameOrId: string | number) => {
  const [pokemonData, setPokemonData] = useState<IPokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${POKEMON_API_BASE_URL}${pokemonNameOrId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setPokemonData(data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (pokemonNameOrId) {
      fetchPokemon();
    }
  }, [pokemonNameOrId]);

  return { pokemonData, loading, error };
};
