import Direction from '@engine/Direction';
import EnemyTank from './EnemyTank';

export default class FastTank extends EnemyTank {
  constructor(x: number, y: number) {
    super(x, y, 13, 15);
  }

  protected GetSprite() {
    switch (this.direction) {
      case Direction.Up:
        return [129, 80];

      case Direction.Left:
        return [160, 81];

      case Direction.Down:
        return [193, 81];

      case Direction.Right:
        return [225, 81];

      default:
        return [0, 0];
    }
  }
}
