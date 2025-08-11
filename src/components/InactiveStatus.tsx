// src/components/InactiveStatus.tsx
interface InactiveStatusProps {
  onPayTribute: () => void;
}

export default function InactiveStatus({ onPayTribute }: InactiveStatusProps) {
  return (
    <div>
      <p className="text-lg text-red-500">Your access is locked. Submit tribute to prove your worth.</p>
      <button
        onClick={onPayTribute}
        className="bg-brand-accent hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg text-lg mt-4 transition-transform transform hover:scale-105"
      >
        Pay Tribute Now
      </button>
    </div>
  );
}
