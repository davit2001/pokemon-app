'use server';
import { POKEMON_SPECIES_API_URL } from '@/constants/API_URL';

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