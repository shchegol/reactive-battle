// - empty
// b - brick wall
// c - concrete wall
// t - tree
// i - ice
// w - water
// e - eagle (base)
// s - spawn

export type Level = Array<string>;

export const Level1 = [
  '--------------------------',
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
  '-----bbb--bb--bb--bbb-----',
  'cc---bbb--bb--bb--bbb---cc',
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
] as Level;
