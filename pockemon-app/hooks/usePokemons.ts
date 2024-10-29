import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import { POKEMON_API_URL } from '@/constants/API_URL';
import { LIMIT } from '@/constants/pagination';

interface Pokemon  {
  name: string;
  url: string;
}

const usePokemons = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const { data, ...rest } = useSWR(
    `${POKEMON_API_URL}/?offset=${currentPage * LIMIT}&limit=${LIMIT}`,
    () => fetch(`${POKEMON_API_URL}/?offset=${currentPage * LIMIT}&limit=${LIMIT}`).then((res) => res.json())
  );

  const parsedData: Pokemon[] = data?.results.map((pokemon: Pokemon) => ({
    name: pokemon.name,
    url: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
  }));

  return { data: parsedData, count: data?.count, ...rest };
}

export default usePokemons;