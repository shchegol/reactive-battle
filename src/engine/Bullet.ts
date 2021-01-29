import Direction from './Direction';
import Sprite from './Sprite';

/* eslint-disable class-methods-use-this */
export default class Bullet extends Sprite {
  protected direction: Direction;

  constructor(x: number = 0, y: number = 0, direction: Direction) {
    super(x, y);
    this.direction = direction;
  }

  public GetSprite() {
    switch (this.direction) {
      case Direction.Forward:
        return [320, 100];

      case Direction.Left:
        return [328, 100];

      case Direction.Backward:
        return [336, 100];

      case Direction.Right:
        return [344, 100];

      default:
        return [0, 0];
    }
  }

  public move(newX: number, newY: number, newDirection: Direction) {
    this.x = newX;
    this.y = newY;
    this.direction = newDirection;
  }
}
