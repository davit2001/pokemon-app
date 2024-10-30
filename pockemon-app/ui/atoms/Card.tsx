import { FC } from 'react';
import Link from 'next/link';
import {Card as NextUICard, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from '@nextui-org/image';
import FallbackImage from '@/assets/images/fallback-image.png';

interface CardProps {
  title: string;
  src: string;
}

const Card: FC<CardProps> = ({ title, src }) => (
  <Link
    href={`/pokemons/${title}`} prefetch
    className="w-full h-full max-w-[360px] max-h-[320px] mx-auto"
  >
    <NextUICard className="py-4 max-h-[320px] mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-lg capitalize">{title}</h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          removeWrapper
          isZoomed
          alt="Card cover image"
          className="object-cover rounded-xl w-full h-full"
          src={src}
          fallbackSrc={FallbackImage.src}
        />
      </CardBody>
    </NextUICard>
  </Link>
);

export default Card;