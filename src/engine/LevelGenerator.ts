import { Level } from './Levels';
import Sprite from './sprite';
import BrickWall from './world/BrickWall';
import ConcreteWall from './world/ConcreteWall';
import Eagle from './world/Eagle';
import Ice from './world/Ice';
import Tree from './world/Tree';
import Water from './world/Water';

export default function LevelGenerator(level: Level): Array<Sprite> {
  const elements: Array<Sprite> = [];

  let x = 0;
  let y = 0;
  for (let i = 0; i < level.length; i += 1) {
    const row = level[i];
    const rowLength = row.length;

    for (let j = 0; j < rowLength; j += 1) {
      const code = row[j];

      switch (code) {
        case 'b':
          elements.push(new BrickWall(x, y));
          break;

        case 'c':
          elements.push(new ConcreteWall(x, y));
          break;

        case 't':
          elements.push(new Tree(x, y));
          break;

        case 'i':
          elements.push(new Ice(x, y));
          break;

        case 'w':
          elements.push(new Water(x, y));
          break;

        case 'e':
          elements.push(new Eagle(x, y));
          break;

        default:
          break;
      }

      x += 16;
    }

    x = 0;
    y += 16;
  }

  return elements;
}
