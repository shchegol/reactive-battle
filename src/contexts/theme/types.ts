export type TTheme = 'dark' | 'light';

export type TThemeContext = {
  theme: TTheme;
  updateTheme: (themeName?: TTheme) => void;
};
