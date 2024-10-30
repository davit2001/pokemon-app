'use server';
import { POKEMON_API_URL, POKEMON_SPECIES_API_URL } from '@/constants/API_URL';
import { LIMIT } from '@/constants/pagination';

interface Pokemon  {
  name: string;
  url: string;
}

export const fetchPokemonByName = async (name: string) => {
  try {
   return await fetch(`${POKEMON_SPECIES_API_URL}/${name}`)
     .then((res) => res.json())
     .then((data) => {
       const concatedDescription = data.flavor_text_entries.map((entry: {
          flavor_text: string;
       }) => entry?.flavor_text).join(' ');

       return {
         ...data,
          description: concatedDescription,
       };
     })
  } catch (err) {
    throw new Error('Failed to fetch pokemon');
  }
}

export const fetchPokemons = async ({ page }: {
  page: number;
}) => {
  try {
    return await fetch(`${POKEMON_API_URL}/?offset=${page * LIMIT}&limit=${LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        const parsedData: Pokemon[] = data?.results.map((pokemon: Pokemon) => ({
          name: pokemon.name,
          url: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
        }));

        return { data: parsedData, count: data?.count, ...data }
      });
  } catch (err) {
    throw new Error('Failed to fetch pokemons');
  }
}