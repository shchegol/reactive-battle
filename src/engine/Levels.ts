// - empty
// b - brick wall
// c - concrete wall
// t - tree
// i - ice
// w - water
// e - eagle (base)
// s - spawn

export type Level = {
  index: number;
  field: Array<string>;
  enemies: Array<EnemyType>;
};

export enum EnemyType {
  Basic,
  Fast,
  Armor,
  Power,
}

export const Level1: Level = {
  index: 0,
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
  enemies: [
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Basic,
    EnemyType.Fast,
    EnemyType.Fast,
  ],
};
