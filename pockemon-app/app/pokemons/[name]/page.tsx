import { FC } from 'react';
import PokemonDetails from '@/ui/molecules/PokemonDetails';

interface PokemonDetailsProps {
  title: string;
  description: string;
  src: string;
  params: any;
}

const PokemonDetailsPage: FC<PokemonDetailsProps> = ({ params }) => {
  return <PokemonDetails name={params.name} />
};

export default PokemonDetailsPage;