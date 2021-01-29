import Bullet from './Bullet';
import Direction from './Direction';
import { EngineBus, SpriteCreated } from './EngineBus';
import Sprite from './Sprite';

/* eslint-disable class-methods-use-this */
export default class Tank extends Sprite {
  protected direction: Direction = Direction.Forward;

  protected bullet: Bullet | undefined;

  constructor(x: number, y: number) {
    super(x, y, 16, 16);
  }

  public move(newX: number, newY: number, newDirection: Direction) {
    this.x = newX;
    this.y = newY;
    this.direction = newDirection;
  }

  /**
   * Fires bullet or skip if bullet flies already
   */
  public shot() {
    if (this.bullet) {
      return;
    }

    const bulletPos = this.getBulletInitialPosition();

    this.bullet = new Bullet(bulletPos.x, bulletPos.y, this.direction);

    EngineBus.emit(SpriteCreated, this.bullet);
  }

  private getBulletInitialPosition() {
    let x = 0;
    let y = 0;

    switch (this.direction) {
      case Direction.Forward:
        x = this.x + this.width / 2;
        y = this.y;
        break;

      case Direction.Backward:
        x = this.x + this.width / 2;
        y = this.y + this.height;
        break;

      case Direction.Left:
        x = this.x;
        y = this.y + this.height / 2;
        break;

      case Direction.Right:
        x = this.x + this.width;
        y = this.y + this.height / 2;
        break;

      default:
        break;
    }

    return { x, y };
  }
}
