import { Pokemon } from "@utils/types/pokemon";
import { api } from "./index";

/**
 * Pokemon API module.
 * @module pokemonApi
 */

/**
 * Injects endpoints for the pokemon API.
 * @function injectEndpoints
 * @param {object} options - The options for injecting endpoints.
 * @returns {object} - The injected endpoints.
 */
export const pokemonApi = api.injectEndpoints({
    endpoints: (build) => ({
        getPokemonByName: build.query<Pokemon, string>({
            query: (name) => `pokemon/${name.toLowerCase()}`,
        }),
        getPokemonById: build.query<Pokemon, number>({
            query: (id) => `pokemon/${id}`,
        }),
        getPokemons: build.query<Pokemon[], { limit: number; offset: number }>({
            query: (params) => `pokemon?limit=${params.limit}&offset=${params.offset}`,
        }),
        getType: build.query<{ pokemon: { pokemon: Pokemon }[] }, string>({
            query: (type) => `type/${type.toLowerCase()}`,
        }),
    }),
});

export const { 
    useGetPokemonByNameQuery,
    useGetPokemonByIdQuery,
    useGetPokemonsQuery,
    useGetTypeQuery,
} = pokemonApi;
