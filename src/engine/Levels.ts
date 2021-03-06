// Sprites
// - empty
// b - brick wall
// c - concrete wall
// t - tree
// i - ice
// w - water
// e - eagle (base)
// s - spawn

// Enemies
// b - basic
// f - fast

export type Level = {
  field: Array<string>;
  enemies: string;
};

export enum EnemyType {
  Basic,
  Fast,
  Armor,
  Power,
}

const Level1: Level = {
  field: [
    's-----------s-----------s-',
    '--------------------------',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb--bbccbb--bb--bb--',
    '--bb--bb--bbccbb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb----------bb--bb--',
    '--------------------------',
    '----------bb--bb----------',
    '----bbbb--bb--bb--bbbb----',
    'cc--bbbb----------bbbb--cc',
    '--------------------------',
    '----------bb--bb----------',
    '--bb--bb--bbbbbb--bb--bb--',
    '--bb--bb--bbbbbb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb--bb--bb--bb--bb--',
    '--bb--bb----------bb--bb--',
    '--bb--bb----------bb--bb--',
    '--bb--bb---bbbb---bb--bb--',
    '-----------be-b-----------',
    '-----------b--b-----------',
  ],
  enemies: 'bbbbbbbbbbbbbbbbbbff',
};

const Level2: Level = {
  field: [
    's-----cc----s-cc--------s-',
    '------cc------cc----------',
    '--bb--cc------bb--bb--bb--',
    '--bb--cc------bb--bb--bb--',
    '--bb--------bbbb--bbccbb--',
    '--bb--------bbbb--bbccbb--',
    '------bb----------cc------',
    '------bb----------cc------',
    'tt----bb----cc----bbttbbcc',
    'tt----bb----cc----bbttbbcc',
    'tttt------bb----cc--tt----',
    'tttt------bb----cc--tt----',
    '--bbbbbbttttttcc----ttbb--',
    '--bbbbbbttttttcc----ttbb--',
    '------ccttbb--bb--bb--bb--',
    '------ccttbb--bb--bb--bb--',
    'ccbb--cc--bb--bb------bb--',
    'ccbb--cc--bb--bb------bb--',
    '--bb--bb--bbbbbb--bbccbb--',
    '--bb--bb--bbbbbb--bbccbb--',
    '--bb--bb--bbbbbb----------',
    '--bb--bb--bbbbbb----------',
    '--bb--------------bb--bb--',
    '--bb-------bbbb---bb--bb--',
    '--bb--bb---be-b---bbbbbb--',
    '--bb--bb---b--b---bbbbbb--',
  ],
  enemies: 'ffffbbbbbbbbbbbbbbbb',
};

export const gameLevels = [Level1, Level2];
