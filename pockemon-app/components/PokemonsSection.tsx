import { FC } from 'react';
import NoData from '@/ui/atoms/NotData';
import Card from '@/ui/atoms/Card';
import Pagination from '@/ui/atoms/Pagination';

interface PokemonsSectionProps {
  data: {
    name: string;
    url: string;
  }[];
  count: number;
}

const PokemonsSection: FC<PokemonsSectionProps> = ({ data, count }) => {
  if (!data) {
    return (
      <NoData />
    )
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-white capitalize">
        Pokémon List
      </h1>
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