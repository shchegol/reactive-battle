import Direction from '@engine/Direction';
import {
  EngineBus,
  SPRITE_COLLIDED,
  SPRITE_DESTROYED,
  SPRITE_MOVED,
  SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import { gameControl } from '@engine/GameControl';
import Sprite from '@engine/sprites/Sprite';
import { GameStates } from '@engine/types/GameStates';
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

    this.onSpriteCollided = this.onSpriteCollided.bind(this);
    this.onOutOfBounds = this.onOutOfBounds.bind(this);

    EngineBus.on(SPRITE_COLLIDED, this.onSpriteCollided);
    EngineBus.on(SPRITE_OUT_OF_BOUNDS, this.onOutOfBounds);
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
    if (gameControl.State === GameStates.Play) {
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

      EngineBus.emit(SPRITE_MOVED, this);
    }

    super.render(ctx);
  }

  public move(newX: number, newY: number, newDirection: Direction) {
    this.x = newX;
    this.y = newY;
    this.direction = newDirection;
  }

  private onOutOfBounds(sprite: Sprite) {
    if (sprite !== this) return;

    EngineBus.emit(SPRITE_DESTROYED, this);
  }

  private onSpriteCollided(movedSprite: Sprite, collideWith: Sprite) {
    if (movedSprite === this) {
      if (collideWith instanceof Bullet) {
        EngineBus.emit(SPRITE_DESTROYED, this);
        EngineBus.emit(SPRITE_DESTROYED, collideWith);
      }
    }
  }

  public detach() {
    super.detach();

    EngineBus.off(SPRITE_COLLIDED, this.onSpriteCollided);
    EngineBus.off(SPRITE_OUT_OF_BOUNDS, this.onOutOfBounds);
  }
}
