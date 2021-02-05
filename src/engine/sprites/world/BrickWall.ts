/* eslint-disable class-methods-use-this */
import Direction from '@engine/Direction';
import { EngineBus, SPRITE_COLLIDED, SPRITE_DESTROYED } from '@engine/EngineBus';
import Bullet from '../Bullet';
import Sprite from '../Sprite';
import Wall from './Wall';

export default class BrickWall extends Wall {
  private isHitLeft: boolean;

  private isHitUp: boolean;

  private isHitRigth: boolean;

  private isHitDown: boolean;

  constructor(x: number = 0, y: number = 0) {
    super(x, y);

    EngineBus.on(SPRITE_COLLIDED, (sprite1: Sprite, sprite2: Sprite) => this.onSpriteCollided(sprite1, sprite2));
  }

  public get ActualWidth() {
    return this.Width;
  }

  public get ActualHeight() {
    return this.Height;
  }

  protected GetSprite() {
    if (this.isHitLeft) {
      return [268, 64];
    }

    if (this.isHitUp) {
      return [272, 68];
    }

    if (this.isHitRigth) {
      return [280, 64];
    }

    if (this.isHitDown) {
      return [288, 64];
    }

    return [256, 64];
  }

  private onSpriteCollided(sprite1: Sprite, sprite2: Sprite) {
    if (!sprite1 || sprite2 !== this) {
      return;
    }

    if (sprite1 instanceof Bullet) {
      const bullet = sprite1;

      if (this.isHitLeft || this.isHitUp || this.isHitRigth || this.isHitDown) {
        EngineBus.emit(SPRITE_DESTROYED, this);
      } else {
        switch (bullet.Direction) {
          case Direction.Left:
            this.isHitRigth = true;
            this.width /= 2;
            break;

          case Direction.Up:
            this.isHitDown = true;
            this.height /= 2;
            break;

          case Direction.Right:
            this.isHitLeft = true;
            this.x += this.Width / 2;
            this.width /= 2;
            break;

          case Direction.Down:
            this.isHitUp = true;
            this.y += this.Height / 2;
            this.height /= 2;
            break;
          default:
            break;
        }
      }
    }
  }
}
