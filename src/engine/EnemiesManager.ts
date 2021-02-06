import { EngineBus, LEVEL_START, SPRITE_CREATED } from '@engine/EngineBus';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import Direction from './Direction';
import { EnemyType, Level } from './Levels';
import BasicTank from './sprites/enemies/BasicTank';
import FastTank from './sprites/enemies/FastTank';
import { spritesManager } from './SpritesManager';

const MAX_ENEMIES_ON_FIELD = 4;
const MAX_SPAWN_ON_FIELD = 3;

export default class EnemiesManager {
  private enemies: EnemyTank[] = [];

  private restEnemies: EnemyTank[] = [];

  private nextSpawn: number = 0;

  public init() {
    EngineBus.on(LEVEL_START, (level: Level) => this.onLevelStart(level));
  }

  public get RestEnemies() {
    return this.restEnemies;
  }

  private onLevelStart(level: Level) {
    if (!level) {
      return;
    }

    level.enemies.forEach((enemyType) => {
      switch (enemyType) {
        case EnemyType.Basic:
          this.restEnemies.push(new BasicTank(0, 0));
          break;

        case EnemyType.Fast:
          this.restEnemies.push(new FastTank(0, 0));
          break;

        default:
          break;
      }
    });

    setInterval(() => this.onTimer(), 3000);
  }

  private onTimer() {
    this.tryLetOutEnemy();
  }

  private tryLetOutEnemy() {
    if (this.restEnemies.length === 0) {
      return;
    }

    const activeEnemies = spritesManager.Sprites.filter((sprite) => sprite instanceof EnemyTank).length;
    if (activeEnemies >= MAX_ENEMIES_ON_FIELD) {
      return;
    }

    const nextEnemy = this.restEnemies.shift();
    if (nextEnemy) {
      switch (this.nextSpawn) {
        case 1:
          nextEnemy.changeLocation(195, 3, Direction.Down);
          break;

        case 2:
          nextEnemy.changeLocation(387, 3, Direction.Down);
          break;

        default:
          nextEnemy.changeLocation(3, 3, Direction.Down);
          break;
      }

      this.enemies.push(nextEnemy);
      EngineBus.emit(SPRITE_CREATED, nextEnemy);
    }

    this.nextSpawn += 1;
    if (this.nextSpawn === MAX_SPAWN_ON_FIELD) {
      this.nextSpawn = 0;
    }
  }
}

export const enemiesManager = new EnemiesManager();
