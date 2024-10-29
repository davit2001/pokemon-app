import { FC } from 'react';
import {Card as NextUICard, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';

interface CardProps {
  title: string;
  src: string;
}

const Card: FC<CardProps> = ({ title, src }) => (
  <Link href={`/pokemons/${title}`}>
    <NextUICard className="py-4 max-w-[200px] mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-lg">{title}</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isZoomed
          alt="Card cover image"
          className="object-cover rounded-xl w-full"
          src={src}
        />
      </CardBody>
    </NextUICard>
  </Link>
);

export default Card;