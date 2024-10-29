'use client';

import { Image } from '@nextui-org/image';
import { FC } from 'react';
import useSWR from 'swr';
import { POKEMON_API_URL } from '@/constants/API_URL';

interface PokemonDetailsProps {
  name: string
}

const PokemonDetails: FC<PokemonDetailsProps> = ({ name }) => {
  const { data } = useSWR(`${POKEMON_API_URL}/${name}`,
    () => fetch(`${POKEMON_API_URL}/${name}`).then((res) => res.json()));

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        {data?.name}
      </h1>
      <div className="flex flex-wrap gap-3 justify-between mt-3">
        <Image
          isZoomed
          alt="Card cover image"
          className="object-cover rounded-xl w-full"
          src={`https://img.pokemondb.net/artwork/${data?.name}.jpg`}
        />
      </div>
      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
        {data?.description}
      </div>
    </div>
  )
}

export default PokemonDetails;