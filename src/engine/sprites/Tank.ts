import Bullet from '@engine/sprites/Bullet';
import Direction from '@engine/Direction';
import {
  EngineBus, SPRITE_COLLIDED, SPRITE_CREATED, SPRITE_DESTROYED, SPRITE_MOVED, SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Wall from '@engine/sprites/world/Wall';

export default class Tank extends Sprite {
  protected direction: Direction = Direction.Forward;

  protected speed: number = 2;

  protected bullet: Bullet | null;

  constructor(x: number, y: number) {
    super(x, y, 16, 16);

    EngineBus.on(SPRITE_DESTROYED, (sprite: Sprite) => this.onSpriteDestroyed(sprite));
    EngineBus.on(SPRITE_COLLIDED, (sprite: Sprite, collideWith: Sprite) => this.onSpriteCollided(sprite, collideWith));
    EngineBus.on(SPRITE_OUT_OF_BOUNDS, (sprite: Sprite) => this.onSpriteOutOfBounds(sprite));
  }

  public move(newX: number, newY: number, newDirection: Direction) {
    this.x = newX;
    this.y = newY;
    this.direction = newDirection;

    EngineBus.emit(SPRITE_MOVED, this);
  }

  /**
   * Fires bullet or skip if bullet flies already
   */
  public shot() {
    if (this.bullet) {
      return;
    }

    const bulletPos = this.getBulletInitialPosition(8, 8);
    this.bullet = new Bullet(bulletPos.x, bulletPos.y, this.direction);

    EngineBus.emit(SPRITE_CREATED, this.bullet);
  }

  private getBulletInitialPosition(bulletWidth: number, bulletHeight: number) {
    let x = 0;
    let y = 0;

    switch (this.direction) {
      case Direction.Forward:
        x = this.x + this.Width / 2 - bulletWidth / 2;
        y = this.y;
        break;

      case Direction.Backward:
        x = this.x + this.Width / 2 - bulletWidth / 2;
        y = this.y + this.Height - bulletHeight;
        break;

      case Direction.Left:
        x = this.x;
        y = this.y + this.Height / 2 - bulletHeight / 2;
        break;

      case Direction.Right:
        x = this.x + this.Width - bulletWidth;
        y = this.y + this.Height / 2 - bulletHeight / 2;
        break;

      default:
        break;
    }

    return { x, y };
  }

  private onSpriteDestroyed(sprite: Sprite) {
    if (sprite === this.bullet) {
      this.bullet = null;
    }
  }

  private onSpriteCollided(sprite: Sprite, collideWith: Sprite) {
    if (sprite !== this || !collideWith) {
      return;
    }

    if (collideWith instanceof Wall) {
      this.undoMove();
    }
  }

  private onSpriteOutOfBounds(sprite: Sprite) {
    if (sprite !== this) {
      return;
    }

    this.undoMove();
  }

  private undoMove() {
    switch (this.direction) {
      case Direction.Forward:
        this.y += this.speed;
        break;

      case Direction.Backward:
        this.y -= this.speed;
        break;

      case Direction.Left:
        this.x += this.speed;
        break;

      case Direction.Right:
        this.x -= this.speed;
        break;

      default:
        break;
    }
  }
}
