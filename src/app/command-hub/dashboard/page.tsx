"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getDashboardStatus, createCheckoutSession, getPresignedUrl, UserStatus } from '@/lib/api';
import LoadingStatus from '@/components/LoadingStatus';
import InactiveStatus from '@/components/InactiveStatus';
import ActiveStatus from '@/components/ActiveStatus';

type Status = UserStatus['status'] | 'loading';

interface User {
  username: string;
  avatarUrl: string;
}

export default function DashboardPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [user, setUser] = useState<User | null>(null);
  const [arenaLink, setArenaLink] = useState<string>('#');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await getDashboardStatus();
        setStatus(data.status);
        setUser(data.user);
        if (data.arenaLink) {
          setArenaLink(data.arenaLink);
        }
      } catch (error) {
        console.error(error);
        // The getDashboardStatus function will redirect to login on 401
      }
    };

    fetchStatus();
  }, []);

  const handlePayTribute = async () => {
    try {
      const { url } = await createCheckoutSession();
      window.location.href = url;
    } catch (error) {
      console.error(error);
      alert('Failed to start payment process. Please try again.');
    }
  };

  const handleViewMedia = async (mediaId: number) => {
    try {
      const { url } = await getPresignedUrl(mediaId);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
      alert('Failed to load media. Please try again.');
    }
  };

  const renderStatusComponent = () => {
    switch (status) {
      case 'loading':
        return <LoadingStatus />;
      case 'active':
        return <ActiveStatus arenaLink={arenaLink} onViewMedia={handleViewMedia} />;
      case 'unpaid':
      case 'lapsed':
        return <InactiveStatus onPayTribute={handlePayTribute} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col items-center p-4">
      <header className="w-full max-w-5xl mx-auto py-4 px-8 flex justify-between items-center border-b border-brand-charcoal">
        <Link href="/">
          <Image
            src="https://placehold.co/150x75/1A1A1A/FFFFFF?text=JAKE"
            alt="Brand Logo"
            width={120}
            height={60}
          />
        </Link>
        {user && (
          <div className="flex items-center gap-4">
            <span className="font-bold">{user.username}</span>
            <Image
              src={user.avatarUrl}
              alt={`${user.username}'s avatar`}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        )}
      </header>
      <main className="flex flex-col items-center text-center mt-8 w-full max-w-5xl px-8">
        {user && (
          <>
            <h1 className="text-3xl font-bold mt-4">
              Kneel, <span className="text-brand-accent">{user.username}</span>. Your status is <span className="text-brand-accent">{status}</span>.
            </h1>
            <div className="mt-8 p-8 border border-brand-charcoal rounded-lg w-full">
              {renderStatusComponent()}
            </div>
          </>
        )}
        {status === 'loading' && <LoadingStatus />}
      </main>
    </div>
  );
}
