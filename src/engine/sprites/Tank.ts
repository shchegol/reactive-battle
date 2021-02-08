/* eslint-disable class-methods-use-this */
import Bullet from '@engine/sprites/Bullet';
import Direction from '@engine/Direction';
import {
  EngineBus,
  SPRITE_COLLIDED,
  SPRITE_CREATED,
  SPRITE_DESTROYED,
  SPRITE_MOVED,
  SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Wall from '@engine/sprites/world/Wall';

export default class Tank extends Sprite {
  protected direction: Direction = Direction.Up;

  protected speed: number = 2;

  protected bullet: Bullet | null;

  protected directionMileage: number = 0;

  protected isPlayer: boolean;

  constructor(x: number, y: number, width: number = 16, height: number = 16) {
    super(x, y, width, height);

    EngineBus.on(SPRITE_DESTROYED, (sprite: Sprite) => this.onSpriteDestroyed(sprite));
    EngineBus.on(SPRITE_COLLIDED, (sprite: Sprite, collideWith: Sprite, oldX: number, oldY: number) => this.onSpriteCollided(sprite, collideWith, oldX, oldY));
    EngineBus.on(SPRITE_OUT_OF_BOUNDS, (sprite: Sprite, oldX: number, oldY: number) => this.onSpriteOutOfBounds(sprite, oldX, oldY));
  }

  /**
   * Direction of tank
   *
   * @readonly
   * @type {Direction}
   * @memberof Tank
   */
  public get Direction(): Direction {
    return this.direction;
  }

  /**
   * Pixel counter when the tank moves in one direction
   *
   * @readonly
   * @type {number}
   * @memberof Tank
   */
  public get DirectionMileage(): number {
    return this.directionMileage;
  }

  /**
   * Player indicator
   *
   * @readonly
   * @type {boolean}
   * @memberof Tank
   */
  public get IsPlayer(): boolean {
    return this.isPlayer;
  }

  public move(newDirection: Direction) {
    const oldX = this.x;
    const oldY = this.y;
    const oldDirection = this.direction;

    this.direction = newDirection;

    switch (this.direction) {
      case Direction.Up:
        this.y -= this.speed;
        break;
      case Direction.Left:
        this.x -= this.speed;
        break;
      case Direction.Right:
        this.x += this.speed;
        break;
      case Direction.Down:
        this.y += this.speed;
        break;
      default:
        break;
    }

    if (oldDirection === newDirection) {
      this.directionMileage += this.speed;
    } else {
      this.directionMileage = 0;
    }

    EngineBus.emit(SPRITE_MOVED, this, oldX, oldY);
  }

  public changeLocation(newX: number, newY: number, newDirection: Direction) {
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

    const bulletPos = this.getBulletInitialPosition(8, 8);
    this.bullet = new Bullet(bulletPos.x, bulletPos.y, this.direction, this);

    EngineBus.emit(SPRITE_CREATED, this.bullet);
  }

  private getBulletInitialPosition(bulletWidth: number, bulletHeight: number) {
    let x = 0;
    let y = 0;

    switch (this.direction) {
      case Direction.Up:
        x = this.x + this.Width / 2 - bulletWidth / 2;
        y = this.y - bulletHeight;
        break;

      case Direction.Down:
        x = this.x + this.Width / 2 - bulletWidth / 2;
        y = this.y + this.Height;
        break;

      case Direction.Left:
        x = this.x - bulletWidth;
        y = this.y + this.Height / 2 - bulletHeight / 2;
        break;

      case Direction.Right:
        x = this.x + this.Width;
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
      } else if (collideWith instanceof Tank) {
        this.onTankHit(collideWith, oldX, oldY);
      }
    }

    if (collideWith === this) {
      if (movedSprite instanceof Bullet) {
        this.onBulletHit(movedSprite);
      }
    }
  }

  private onSpriteOutOfBounds(sprite: Sprite, oldX: number, oldY: number) {
    if (sprite !== this) {
      return;
    }

    this.undoMove(oldX, oldY);
  }

  protected undoMove(oldX: number, oldY: number) {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onTankHit(_tank: Tank, oldX: number, oldY: number): void {
    this.undoMove(oldX, oldY);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onBulletHit(_bullet: Bullet): void { }
}
