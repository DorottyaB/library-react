import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const prefersLight = localStorage.getItem('prefersLight')
    ? JSON.parse(localStorage.getItem('prefersLight'))
    : false;

  const [theme, setTheme] = useState({
    isLightTheme: prefersLight,
    light: {
      bg: '#d9e1e0',
      cardBg: '#ebeeee',
      text: '#070707',
    },
    dark: {
      bg: '#131821',
      cardBg: '#19202E',
      text: '#e2e2e2',
    },
  });

  function toggleTheme() {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  }

  useEffect(() => {
    localStorage.setItem('prefersLight', JSON.stringify(theme.isLightTheme));
  }, [theme]);

  const getTheme = theme.isLightTheme ? theme.light : theme.dark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
