// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDay, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
