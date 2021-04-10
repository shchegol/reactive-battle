import * as React from 'react';
import { useEffect } from 'react';
import { Themes, TThemeContext } from './types';

export const ThemeContext = React.createContext<TThemeContext>({ theme: Themes.dark, updateTheme: () => {} });

export const ThemeProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<Themes>(Themes.dark);

  const updateTheme = async (newTheme: string) => {
    const enumTheme: Themes = Themes[newTheme as keyof typeof Themes];

    if (!Object.keys(Themes).includes(newTheme)) return;

    localStorage.setItem('theme', newTheme);
    setTheme(Themes[enumTheme]);
    document.documentElement.setAttribute('theme', newTheme);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme) return;
    updateTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
