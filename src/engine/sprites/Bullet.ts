/* eslint-disable class-methods-use-this */
import Direction from '@engine/Direction';
import {
  EngineBus, SPRITE_DESTROYED, SPRITE_MOVED, SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import { spritesSheet } from '@engine/SpritesSheet';

export default class Bullet extends Sprite {
  protected direction: Direction;

  constructor(x: number = 0, y: number = 0, direction: Direction) {
    super(x, y, 4, 4);
    this.direction = direction;

    EngineBus.on(SPRITE_OUT_OF_BOUNDS, (sprite: Sprite) => this.onOutOfBounds(sprite));
  }

  public GetSprite() {
    return spritesSheet.Bullet;
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.translate(this.X + this.Width / 2, this.Y + this.Height / 2);

    switch (this.direction) {
      case Direction.Forward:
        this.y -= 2;
        break;

      case Direction.Backward:
        ctx.rotate(Math.PI / 2);
        this.y += 2;
        break;

      case Direction.Left:
        ctx.rotate((3 * Math.PI) / 4);
        this.x -= 2;
        break;

      case Direction.Right:
        ctx.rotate(Math.PI / 2);
        this.x += 2;
        break;

      default:
        break;
    }

    // super.render(ctx);

    const image = this.GetSprite();

    if (image) {
      ctx.drawImage(image, this.X, this.Y, this.Width, this.Height, -this.Width / 2, -this.Height / 2, this.Width, this.Height);
    }

    ctx.restore();

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
