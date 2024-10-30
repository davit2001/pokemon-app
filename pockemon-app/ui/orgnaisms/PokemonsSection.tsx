'use client';
import usePokemons from '@/hooks/usePokemons';
import NoData from '@/ui/atoms/NotData';
import { Spinner } from '@nextui-org/spinner';
import Card from '@/ui/atoms/Card';
import Pagination from '@/ui/atoms/Pagination';

const PokemonsSection = () => {
  const { data, isLoading, count } = usePokemons();

  if (!data && !isLoading) {
    return (
      <NoData />
    )
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 capitalize">
        Pokémon List
      </h1>
      {
        isLoading && (
          <div>
            <Spinner size="lg"/>
          </div>
        )
      }
      <div className="flex flex-wrap gap-3 justify-between mt-3">
        {data?.map(pokemon => (
          <Card title={pokemon.name} src={pokemon.url}/>
        ))}
      </div>
      <Pagination totalPages={count}/>
    </div>
  )
};

export default PokemonsSection;