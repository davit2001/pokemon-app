
import { Image } from '@nextui-org/image';
import { FC } from 'react';


interface PokemonDetailsProps {
  data: {
    name: string;
    description: string;
  };
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-bold text-center text-white capitalize">
        {data?.name}
      </h1>
      <div className="flex flex-wrap gap-3 justify-between mt-3 w-full max-h-[300px]">
        <Image
          removeWrapper
          isZoomed
          alt="Card cover image"
          className="object-contain rounded-xl w-full h-auto max-h-[300px]"
          src={`https://img.pokemondb.net/artwork/${data?.name}.jpg`}
        />
      </div>
      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 text-white">
        {data?.description}
      </div>
    </div>
  )
}

export default PokemonDetails;