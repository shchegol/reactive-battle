import Direction from './Direction';
import EnemyTank from './sprites/enemies/EnemyTank';
import { spritesManager } from './SpritesManager';

export default class AIManager {
  public static update() {
    const enemies = spritesManager.Sprites.filter((sprite) => sprite instanceof EnemyTank);
    enemies.forEach((enemy: EnemyTank) => {
      if (enemy.DirectionMileage === 0 || enemy.DirectionMileage < 32) {
        enemy.move(enemy.Direction);
      } else {
        const rnd = AIManager.getRndInteger(0, 10);

        switch (rnd) {
          case 0:
            enemy.move(Direction.Left);
            break;

          case 1:
            enemy.move(Direction.Up);
            break;

          case 2:
            enemy.move(Direction.Right);
            break;

          case 3:
            enemy.move(Direction.Down);
            break;

          default:
            enemy.move(enemy.Direction);
            break;
        }
      }

      enemy.shot();
    });
  }

  private static getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
