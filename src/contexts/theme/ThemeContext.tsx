import * as React from 'react';
import { TTheme, TThemeContext } from './types';

export const ThemeContext = React.createContext<TThemeContext>({ theme: 'dark', updateTheme: () => {} });

export const ThemeProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<TTheme>('dark');

  const updateTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
