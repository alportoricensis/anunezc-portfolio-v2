'use client';

import { useState, useEffect } from 'react';

export default function DeviceOrientationCheck({ children }) {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <>
      {isPortrait && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 text-white text-center text-xl px-4 backdrop-blur-sm transition-opacity duration-300">
          <div className="animate-pulse mb-4 text-2xl">🔄</div>
          <p>Please rotate your device<br/>for the best experience</p>
        </div>
      )}
      {children}
    </>
  );
}
