import Direction from '@engine/Direction';
import EnemyTank from './EnemyTank';

export default class BasicTank extends EnemyTank {
  protected speed: number = 1;

  constructor(x: number, y: number) {
    super('basic', x, y, 13, 13);
  }

  protected GetSprite() {
    switch (this.direction) {
      case Direction.Up:
        return [129, 2];

      case Direction.Left:
        return [163, 1];

      case Direction.Down:
        return [193, 1];

      case Direction.Right:
        return [225, 1];

      default:
        return [0, 0];
    }
  }
}
