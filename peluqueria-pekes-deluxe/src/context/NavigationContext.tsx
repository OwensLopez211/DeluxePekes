"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  showGallery: boolean;
  setShowGallery: (show: boolean) => void;
  showAbout: boolean;
  setShowAbout: (show: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <NavigationContext.Provider value={{ 
      showGallery, 
      setShowGallery,
      showAbout,
      setShowAbout
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};