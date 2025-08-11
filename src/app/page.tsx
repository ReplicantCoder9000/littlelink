import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Dices, Instagram, Gift } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center text-center">
        <Image
          src="https://placehold.co/150x150/1A1A1A/FFFFFF?text=J"
          alt="Jake's Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-brand-accent"
        />
        <h1 className="text-4xl font-bold mt-4">@Jake</h1>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
          <a
            href="#"
            className="bg-brand-charcoal hover:bg-opacity-80 text-brand-light font-bold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"
          >
            <Twitter size={24} />
            <span>X (Twitter)</span>
          </a>
          <a
            href="#"
            className="bg-brand-charcoal hover:bg-opacity-80 text-brand-light font-bold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"
          >
            <Dices size={24} />
            <span>TikTok</span>
          </a>
          <a
            href="#"
            className="bg-brand-charcoal hover:bg-opacity-80 text-brand-light font-bold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="#"
            className="bg-brand-charcoal hover:bg-opacity-80 text-brand-light font-bold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2"
          >
            <Gift size={24} />
            <span>Public Wishlist</span>
          </a>
        </div>
        <div className="relative mt-8">
          <Image
            src="https://placehold.co/400x600/1A1A1A/FFFFFF?text=Reveal"
            alt="Censored Photo"
            width={400}
            height={600}
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-brand-dark bg-opacity-60 flex items-center justify-center rounded-lg">
            <Link
              href="/command-hub/login"
              className="bg-brand-accent hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105"
            >
              Reveal
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
