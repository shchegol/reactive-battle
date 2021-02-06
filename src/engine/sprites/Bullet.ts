import Direction from '@engine/Direction';
import {
  EngineBus, SPRITE_DESTROYED, SPRITE_MOVED, SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Tank from './Tank';

export default class Bullet extends Sprite {
  private direction: Direction;

  private speed: number = 2.5;

  private tank: Tank;

  constructor(x: number = 0, y: number = 0, direction: Direction, tank: Tank) {
    super(x, y);

    switch (direction) {
      case Direction.Left:
      case Direction.Right:
        this.width = 4;
        this.height = 3;
        break;

      case Direction.Up:
      case Direction.Down:
        this.width = 3;
        this.height = 4;
        break;

      default:
        break;
    }

    this.direction = direction;
    this.tank = tank;

    EngineBus.on(SPRITE_OUT_OF_BOUNDS, (sprite: Sprite) => this.onOutOfBounds(sprite));
  }

  public get Direction() {
    return this.direction;
  }

  public get Tank() {
    return this.tank;
  }

  public GetSprite() {
    switch (this.direction) {
      case Direction.Up:
        return [323, 102];

      case Direction.Left:
        return [330, 102];

      case Direction.Down:
        return [339, 102];

      case Direction.Right:
        return [346, 102];

      default:
        return [0, 0];
    }
  }

  public render(ctx: CanvasRenderingContext2D) {
    switch (this.direction) {
      case Direction.Up:
        this.y -= this.speed;
        break;

      case Direction.Down:
        this.y += this.speed;
        break;

      case Direction.Left:
        this.x -= this.speed;
        break;

      case Direction.Right:
        this.x += this.speed;
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
