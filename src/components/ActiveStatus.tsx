// src/components/ActiveStatus.tsx
import Image from 'next/image';

interface ActiveStatusProps {
  arenaLink: string;
  onViewMedia: (mediaId: number) => void;
}

export default function ActiveStatus({ arenaLink, onViewMedia }: ActiveStatusProps) {
  return (
    <div>
      <p className="text-lg">Your tribute is active. You have earned a place in my arena.</p>
      <a
        href={arenaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-lg mt-4 inline-block transition-transform transform hover:scale-105"
      >
        Enter My Arena
      </a>

      {/* Gated Content Section */}
      <div className="mt-12 w-full">
        <h2 className="text-3xl font-bold mb-4">Gated Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-brand-charcoal p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105" onClick={() => onViewMedia(id)}>
              <Image
                src={`https://placehold.co/300x200/1A1A1A/FFFFFF?text=Media+${id}`}
                alt={`Media ${id}`}
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
