import { EngineBus, SPRITE_CREATED } from './EngineBus';
import { Level } from './Levels';
import BrickWall from './world/BrickWall';
import ConcreteWall from './world/ConcreteWall';
import Eagle from './world/Eagle';
import Ice from './world/Ice';
import Tree from './world/Tree';
import Water from './world/Water';

export default function CreateLevelSprites(level: Level) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < level.length; i += 1) {
    const row = level[i];
    const rowLength = row.length;

    for (let j = 0; j < rowLength; j += 1) {
      const code = row[j];

      switch (code) {
        case 'b':
          EngineBus.emit(SPRITE_CREATED, new BrickWall(x, y));
          break;

        case 'c':
          EngineBus.emit(SPRITE_CREATED, new ConcreteWall(x, y));
          break;

        case 't':
          EngineBus.emit(SPRITE_CREATED, new Tree(x, y));
          break;

        case 'i':
          EngineBus.emit(SPRITE_CREATED, new Ice(x, y));
          break;

        case 'w':
          EngineBus.emit(SPRITE_CREATED, new Water(x, y));
          break;

        case 'e':
          EngineBus.emit(SPRITE_CREATED, new Eagle(x, y));
          break;

        default:
          break;
      }

      x += 16;
    }

    x = 0;
    y += 16;
  }
}
