/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import CollisionManager from './CollisionManager';
import Direction from './Direction';
import {
  EngineBus, PlayerMoveBackward, PlayerMoveForward, PlayerMoveLeft, PlayerMoveRight, PlayerShot, PlayerStopBackward, PlayerStopForward, PlayerStopLeft, PlayerStopRight,
} from './EngineBus';
import Player from './Player';
import Sprite from './Sprite';
import Wall from './world/Wall';
import Water from './world/Water';

export default class PlayerManager {
  private player: Player;

  private inMoveRight: boolean;

  private inMoveLeft: boolean;

  private inMoveForward: boolean;

  private inMoveBackward: boolean;

  private direction: Direction;

  constructor(player: Player) {
    this.player = player;
  }

  public subscribe() {
    EngineBus.on(PlayerMoveLeft, () => this.moveLeft());
    EngineBus.on(PlayerMoveRight, () => this.moveRight());
    EngineBus.on(PlayerMoveForward, () => this.moveForward());
    EngineBus.on(PlayerMoveBackward, () => this.moveBackward());

    EngineBus.on(PlayerStopLeft, () => this.stopLeft());
    EngineBus.on(PlayerStopRight, () => this.stopRight());
    EngineBus.on(PlayerStopForward, () => this.stopForward());
    EngineBus.on(PlayerStopBackward, () => this.stopBackward());

    EngineBus.on(PlayerShot, () => this.shot());
  }

  public Execute(allSprites: Sprite[], context: CanvasRenderingContext2D) {
    if (this.inMoveLeft || this.inMoveRight || this.inMoveForward || this.inMoveBackward) {
      this.move(this.direction, allSprites, context);
    }
  }

  private moveLeft() {
    this.direction = Direction.Left;
    this.inMoveLeft = true;
  }

  private moveRight() {
    this.direction = Direction.Right;
    this.inMoveRight = true;
  }

  private moveForward() {
    this.direction = Direction.Forward;
    this.inMoveForward = true;
  }

  private moveBackward() {
    this.direction = Direction.Backward;
    this.inMoveBackward = true;
  }

  private stopLeft() {
    this.inMoveLeft = false;
  }

  private stopRight() {
    this.inMoveRight = false;
  }

  private stopForward() {
    this.inMoveForward = false;
  }

  private stopBackward() {
    this.inMoveBackward = false;
  }

  private move(direction: Direction, allSprites: Sprite[], context: CanvasRenderingContext2D) {
    const speed = 2;

    let newX = this.player.X;
    let newY = this.player.Y;

    switch (direction) {
      case Direction.Forward:
        newY -= speed;
        break;
      case Direction.Left:
        newX -= speed;
        break;
      case Direction.Right:
        newX += speed;
        break;
      case Direction.Backward:
        newY += speed;
        break;
      default:
        break;
    }

    if (!CollisionManager.checkPlaygroundCollision(this.player, newX, newY, context)) {
      const collideWith = CollisionManager.checkSpritesCollision(this.player, newX, newY, allSprites);

      if (
        collideWith.length > 0
        && (collideWith.some((sprite) => sprite instanceof Wall || sprite instanceof Water))
      ) {
        console.log('stop');
      } else {
        this.player.move(newX, newY, direction);
      }
    }
  }

  private shot() {
    this.player.shot();
  }
}
