import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Link href="/pokemons">
        <Button color="primary">
          Visit pokemons page
        </Button>
      </Link>
    </section>
  );
}
