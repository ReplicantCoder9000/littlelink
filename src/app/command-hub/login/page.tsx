import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center text-center">
        <Link href="/">
          <Image
            src="https://placehold.co/200x100/1A1A1A/FFFFFF?text=JAKE"
            alt="Brand Logo"
            width={200}
            height={100}
            className="mb-8"
          />
        </Link>
        <div className="border-2 border-brand-accent p-8 rounded-lg shadow-lg shadow-brand-accent/20">
          <h1 className="text-2xl font-bold mb-4 text-brand-accent">Verify Your Obedience</h1>
          <Script src="https://telegram.org/js/telegram-widget.js?22" strategy="beforeInteractive" />
          <div
            className="telegram-login-button"
            data-telegram-login="YOUR_BOT_USERNAME"
            data-size="large"
            data-auth-url="/api/auth/telegram"
            data-request-access="write"
            data-userpic="false"
            data-button-text="Submit to Enter"
          ></div>
        </div>
      </main>
    </div>
  );
}
