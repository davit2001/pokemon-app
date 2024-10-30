import PokemonDetails from '@/components/PokemonDetails';
import { fetchPokemonByName } from '@/services/pokemon.service';

const PokemonDetailsPage: any = async ({ params }: any) => {
  const data = await fetchPokemonByName(params.name);

  return <PokemonDetails data={data} />
};

export default PokemonDetailsPage;