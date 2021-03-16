import * as React from 'react';
import { TTheme, TThemeContext } from './types';

export const ThemeContext = React.createContext<TThemeContext>({ theme: 'dark', updateTheme: () => {} });

export const ThemeProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<TTheme>('dark');

  const updateTheme = (themeName?: TTheme) => {
    let newThemeName = themeName;

    if (!newThemeName) {
      newThemeName = theme === 'dark' ? 'light' : 'dark';
    }

    setTheme(newThemeName);
    document.documentElement.setAttribute('theme', newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
