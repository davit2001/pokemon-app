import PokemonsSection from '@/components/PokemonsSection';
import { fetchPokemons } from '@/services/pokemon.service';

const Pokemons = async ({ searchParams }: {
  searchParams: {
    page: number;
  };
}) => {
  const response = await fetchPokemons({ page: searchParams?.page });

  return (
    <PokemonsSection data={response?.data} count={response.count} />
  );
};

export default Pokemons;