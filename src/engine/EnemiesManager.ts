import {
  EngineBus,
  LEVEL_START,
  LEVEL_WIN,
  SPRITE_CREATED,
  SPRITE_DESTROYED,
} from '@engine/EngineBus';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import CollisionManager from './CollisionManager';
import Direction from './Direction';
import { gameControl } from './GameControl';
import { Level } from './Levels';
import { playerManager } from './PlayerManager';
import BasicTank from './sprites/enemies/BasicTank';
import FastTank from './sprites/enemies/FastTank';
import Sprite from './sprites/Sprite';
import { spritesManager } from './SpritesManager';
import { GameStates } from './types/GameStates';

const MAX_ENEMIES_ON_FIELD = 4;

export default class EnemiesManager {
  private enemies: EnemyTank[] = [];

  private restEnemies: EnemyTank[] = [];

  private nextSpawn: number = 0;

  private timer?: NodeJS.Timeout;

  constructor() {
    this.onLevelStart = this.onLevelStart.bind(this);
    this.onSpriteDestroyed = this.onSpriteDestroyed.bind(this);
  }

  public init() {
    EngineBus.on(LEVEL_START, this.onLevelStart);
    EngineBus.on(SPRITE_DESTROYED, this.onSpriteDestroyed);
  }

  public stop() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    EngineBus.off(LEVEL_START, this.onLevelStart);
    EngineBus.off(SPRITE_DESTROYED, this.onSpriteDestroyed);

    this.enemies.forEach((enemy) => enemy.detach());
    this.restEnemies.forEach((enemy) => enemy.detach());

    this.enemies = [];
    this.restEnemies = [];
    this.nextSpawn = 0;

    this.timer = undefined;
  }

  public get RestEnemies() {
    return this.restEnemies;
  }

  private onLevelStart(level?: Level) {
    if (!level) return;

    for (let i = 0; i < level.enemies.length; i += 1) {
      const enemyType = level.enemies.charAt(i);

      switch (enemyType) {
        case 'b':
          this.restEnemies.push(new BasicTank(0, 0));
          break;

        case 'f':
          this.restEnemies.push(new FastTank(0, 0));
          break;

        default:
          break;
      }
    }

    this.timer = setInterval(() => this.onTimer(), 3000);
  }

  private onSpriteDestroyed(sprite: Sprite) {
    if (sprite instanceof EnemyTank) {
      const enemyIndex = this.enemies.findIndex((t) => t === sprite);
      if (enemyIndex > -1) {
        this.enemies.splice(enemyIndex, 1);
      }
    }
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
    if (gameControl.State !== GameStates.Play) return;

    if (this.enemies.length === 0 && this.restEnemies.length === 0) {
      if (this.timer) {
        clearInterval(this.timer);
      }

      EngineBus.emit(LEVEL_WIN);
      return;
    }

    const activeEnemies = spritesManager.Sprites.filter((sprite) => sprite instanceof EnemyTank);

    if (activeEnemies.length >= MAX_ENEMIES_ON_FIELD) return;

    const nextSpawn = spritesManager.Spawns[this.nextSpawn];
    if (nextSpawn) {
      if (CollisionManager.checkSpritesCollision(nextSpawn, playerManager.Player ? [...activeEnemies, playerManager.Player] : activeEnemies).length > 0) {
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
