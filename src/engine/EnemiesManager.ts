import { EngineBus, LEVEL_START, SPRITE_CREATED } from '@engine/EngineBus';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import CollisionManager from './CollisionManager';
import Direction from './Direction';
import { gameControl } from './GameControl';
import { EnemyType, Level } from './Levels';
import { playerManager } from './PlayerManager';
import BasicTank from './sprites/enemies/BasicTank';
import FastTank from './sprites/enemies/FastTank';
import { spritesManager } from './SpritesManager';
import { GameStates } from './types/GameStates';

const MAX_ENEMIES_ON_FIELD = 4;

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

  /**
   * Метод проверяет условия и порождает танк в определенных местах.
   * Проверяет не нажата ли пауза.
   * Проверяет есть ли еще враги.
   * Проверяет количество врагов на поле.
   * Проверяет не занял ли место появления другой танк. Если занял, то враг появится позже.
   * Если все условия ОК, враг появляется в одном из обозначенных мест.
   *
   * @private
   * @return {*}
   * @memberof EnemiesManager
   */
  private tryLetOutEnemy() {
    if (gameControl.State !== GameStates.Play) {
      return;
    }

    if (this.restEnemies.length === 0) {
      return;
    }

    const activeEnemies = spritesManager.Sprites.filter((sprite) => sprite instanceof EnemyTank);
    if (activeEnemies.length >= MAX_ENEMIES_ON_FIELD) {
      return;
    }

    const nextSpawn = spritesManager.Spawns[this.nextSpawn];
    if (nextSpawn) {
      if (CollisionManager.checkSpritesCollision(nextSpawn, [...activeEnemies, playerManager.Player]).length > 0) {
        // this.setNextSpawn();
        return;
      }
    }

    const nextEnemy = this.restEnemies.shift();
    if (nextEnemy) {
      const spawn = spritesManager.Spawns[this.nextSpawn];
      if (spawn) {
        nextEnemy.changeLocation(spawn.X, spawn.Y, Direction.Down);

        this.enemies.push(nextEnemy);
        EngineBus.emit(SPRITE_CREATED, nextEnemy);
      }
    }

    this.setNextSpawn();
  }

  private setNextSpawn() {
    this.nextSpawn += 1;
    if (this.nextSpawn === spritesManager.Spawns.length) {
      this.nextSpawn = 0;
    }
  }
}

export const enemiesManager = new EnemiesManager();
