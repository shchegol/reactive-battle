import Bullet from '@engine/sprites/Bullet';
import Direction from '@engine/Direction';
import {
  EngineBus, SPRITE_COLLIDED, SPRITE_CREATED, SPRITE_DESTROYED, SPRITE_MOVED, SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Wall from '@engine/sprites/world/Wall';

export default class Tank extends Sprite {
  protected direction: Direction = Direction.Up;

  protected speed: number = 2;

  protected bullet: Bullet | null;

  constructor(x: number, y: number, width: number = 16, height: number = 16) {
    super(x, y, width, height);

    EngineBus.on(SPRITE_DESTROYED, (sprite: Sprite) => this.onSpriteDestroyed(sprite));
    EngineBus.on(SPRITE_COLLIDED, (sprite: Sprite, collideWith: Sprite, oldX: number, oldY: number) => this.onSpriteCollided(sprite, collideWith, oldX, oldY));
    EngineBus.on(SPRITE_OUT_OF_BOUNDS, (sprite: Sprite, oldX: number, oldY: number) => this.onSpriteOutOfBounds(sprite, oldX, oldY));
  }

  public move(newX: number, newY: number, newDirection: Direction) {
    const oldX = this.x;
    const oldY = this.y;

    this.x = newX;
    this.y = newY;
    this.direction = newDirection;

    EngineBus.emit(SPRITE_MOVED, this, oldX, oldY);
  }

  /**
   * Fires bullet or skip if bullet flies already
   */
  public shot() {
    if (this.bullet) {
      return;
    }

    const bulletPos = this.getBulletInitialPosition(6, 8);
    this.bullet = new Bullet(bulletPos.x, bulletPos.y, this.direction);

    EngineBus.emit(SPRITE_CREATED, this.bullet);
  }

  private getBulletInitialPosition(bulletWidth: number, bulletHeight: number) {
    let x = 0;
    let y = 0;

    switch (this.direction) {
      case Direction.Up:
        x = this.x + this.Width / 2 - bulletWidth / 2;
        y = this.y;
        break;

      case Direction.Down:
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

  private onSpriteCollided(movedSprite: Sprite, collideWith: Sprite, oldX: number, oldY: number) {
    if (movedSprite === this) {
      if (collideWith instanceof Wall) {
        this.undoMove(oldX, oldY);
      }
    } else if (movedSprite instanceof Bullet && collideWith === this) {
      EngineBus.emit(SPRITE_DESTROYED, this);
    }
  }

  private onSpriteOutOfBounds(sprite: Sprite, oldX: number, oldY: number) {
    if (sprite !== this) {
      return;
    }

    this.undoMove(oldX, oldY);
  }

  private undoMove(oldX: number, oldY: number) {
    switch (this.direction) {
      case Direction.Up:
        this.y = oldY;
        break;

      case Direction.Down:
        this.y = oldY;
        break;

      case Direction.Left:
        this.x = oldX;
        break;

      case Direction.Right:
        this.x = oldX;
        break;

      default:
        break;
    }
  }
}
