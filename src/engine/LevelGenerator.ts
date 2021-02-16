import { EngineBus, SPRITE_CREATED } from '@engine/EngineBus';
import { Level } from '@engine/Levels';
import BrickWall from '@engine/sprites/world/BrickWall';
import ConcreteWall from '@engine/sprites/world/ConcreteWall';
import Eagle from '@engine/sprites/world/Eagle';
import Ice from '@engine/sprites/world/Ice';
import Tree from '@engine/sprites/world/Tree';
import Water from '@engine/sprites/world/Water';
import Spawn from './sprites/world/Spawn';

export default function createLevelSprites(level: Level) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < level.field.length; i += 1) {
    const row = level.field[i];
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

        case 's':
          EngineBus.emit(SPRITE_CREATED, new Spawn(x, y));
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
