// src/lib/api.ts

// Define the shape of the user status object
export interface UserStatus {
  status: 'active' | 'unpaid' | 'lapsed';
  user: {
    username: string;
    avatarUrl: string;
  };
  arenaLink?: string;
}

// Define the shape of the checkout session object
export interface CheckoutSession {
  url: string;
}

// Define the shape of the presigned URL object
export interface PresignedUrl {
  url: string;
}

const API_BASE_URL = '/api'; // Assuming the backend is served from the same domain

/**
 * Fetches the user's dashboard status.
 * Requires a valid session token in a cookie.
 */
export async function getDashboardStatus(): Promise<UserStatus> {
  const response = await fetch(`${API_BASE_URL}/dashboard/status`);
  if (!response.ok) {
    // If the user is not authenticated, the backend should return a 401 status code.
    // We can then redirect the user to the login page.
    if (response.status === 401) {
      window.location.href = '/command-hub/login';
    }
    throw new Error('Failed to fetch dashboard status');
  }
  return response.json();
}

/**
 * Creates a Stripe Checkout session.
 * Requires a valid session token in a cookie.
 */
export async function createCheckoutSession(): Promise<CheckoutSession> {
  const response = await fetch(`${API_... [omitted]
