import Direction from './Direction';
import {
  EngineBus, SPRITE_DESTROYED, SPRITE_MOVED, SPRITE_OUT_OF_BOUNDS,
} from './EngineBus';
import Sprite from './Sprite';

export default class Bullet extends Sprite {
  protected direction: Direction;

  constructor(x: number = 0, y: number = 0, direction: Direction) {
    super(x, y, 4, 4);
    this.direction = direction;

    EngineBus.on(SPRITE_OUT_OF_BOUNDS, (sprite: Sprite) => this.onOutOfBounds(sprite));
  }

  public GetSprite() {
    switch (this.direction) {
      case Direction.Forward:
        return [322, 102];

      case Direction.Left:
        return [330, 102];

      case Direction.Backward:
        return [338, 102];

      case Direction.Right:
        return [346, 102];

      default:
        return [0, 0];
    }
  }

  public render(ctx: CanvasRenderingContext2D) {
    switch (this.direction) {
      case Direction.Forward:
        this.y -= 2;
        break;

      case Direction.Backward:
        this.y += 2;
        break;

      case Direction.Left:
        this.x -= 2;
        break;

      case Direction.Right:
        this.x += 2;
        break;

      default:
        break;
    }

    super.render(ctx);

    EngineBus.emit(SPRITE_MOVED, this);
  }

  public move(newX: number, newY: number, newDirection: Direction) {
    this.x = newX;
    this.y = newY;
    this.direction = newDirection;
  }

  private onOutOfBounds(sprite: Sprite) {
    if (sprite !== this) {
      return;
    }

    EngineBus.emit(SPRITE_DESTROYED, this);
  }
}
