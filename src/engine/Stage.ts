import CreateLevelSprites from '@engine/LevelGenerator';
import { Level1 } from '@engine/Levels';
import { spritesManager } from '@engine/SpritesManager';
import EnemyTank from '@engine/sprites/enemies/EnemyTank';
import BasicTank from './sprites/enemies/BasicTank';
import { EngineBus, SPRITE_CREATED } from './EngineBus';

export default class Stage {
  private enemies: EnemyTank[] = [];

  private restEnemies: EnemyTank[] = [];

  constructor() {
    CreateLevelSprites(Level1);

    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
    this.restEnemies.push(new BasicTank(0, 0));
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    spritesManager.Sprites.forEach((sprite) => sprite.render(ctx));
  }

  public tryLetOutEnemy() {
    if (this.restEnemies.length === 0) {
      return;
    }

    const activeEnemies = spritesManager.Sprites.filter((sprite) => sprite instanceof EnemyTank).length;

    if (activeEnemies >= 1) {
      return;
    }

    const nextEnemy = this.restEnemies.shift();
    if (nextEnemy) {
      this.enemies.push(nextEnemy);

      EngineBus.emit(SPRITE_CREATED, nextEnemy);
    }
  }
}
