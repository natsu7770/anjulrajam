import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('anjulrajam_auth');
    if (stored) {
      setIsAuthenticated(true);
      setHasSeenModal(true);
    }
    setIsLoading(false);
  }, []);

  const signIn = (email: string) => {
    localStorage.setItem('anjulrajam_auth', JSON.stringify({ email, timestamp: Date.now() }));
    setIsAuthenticated(true);
    setHasSeenModal(true);
  };

  const continueAsGuest = () => {
    localStorage.setItem('anjulrajam_guest', 'true');
    setHasSeenModal(true);
  };

  return {
    isAuthenticated,
    hasSeenModal,
    isLoading,
    signIn,
    continueAsGuest,
  };
}
