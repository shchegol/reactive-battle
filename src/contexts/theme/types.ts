export enum Themes {
  dark = 'dark',
  light = 'light',
}

export type TThemeContext = {
  theme: Themes;
  updateTheme: (themeName: string) => void;
};
