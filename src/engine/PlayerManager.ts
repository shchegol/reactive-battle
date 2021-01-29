/* eslint-disable max-len */
import CollisionManager from './CollisionManager';
import Direction from './Direction';
import { keyboardManager } from './KeyboardManager';
import Player from './Player';
import Sprite from './Sprite';
import Wall from './world/Wall';
import Water from './world/Water';

export default class PlayerManager {
  private player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  public Execute(allSprites: Sprite[], context: CanvasRenderingContext2D) {
    if (keyboardManager.upPressed) {
      this.Move(Direction.Forward, allSprites, context);
    } else if (keyboardManager.leftPressed) {
      this.Move(Direction.Left, allSprites, context);
    } else if (keyboardManager.rightPressed) {
      this.Move(Direction.Right, allSprites, context);
    } else if (keyboardManager.downPressed) {
      this.Move(Direction.Backward, allSprites, context);
    }
  }

  private Move(direction: Direction, allSprites: Sprite[], context: CanvasRenderingContext2D) {
    // this.direction = direction;

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
      if (collideWith.length > 0) {
        if (collideWith.some((sprite) => sprite instanceof Wall || sprite instanceof Water)) {
          console.log('stop');
        } else {
          this.player.move(newX, newY, direction);
        }
      } else {
        this.player.move(newX, newY, direction);
      }
    }
  }
}
