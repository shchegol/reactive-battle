import { keyboardManager } from './KeyboardManager';
import SpritesManager, { spritesManager } from './SpritesManager';

enum Direction {
  Forward,
  Left,
  Backward,
  Right,
}

export default class Player {
  private direction: Direction;

  private x: number = 0;

  private y: number = 0;

  public render(ctx: CanvasRenderingContext2D) {
    const scale = 2;

    if (keyboardManager.upPressed) {
      this.direction = Direction.Forward;
      this.y -= 2;
    } else if (keyboardManager.leftPressed) {
      this.direction = Direction.Left;
      this.x -= 2;
    } else if (keyboardManager.rightPressed) {
      this.direction = Direction.Right;
      this.x += 2;
    } else if (keyboardManager.downPressed) {
      this.direction = Direction.Backward;
      this.y += 2;
    }

    const sprite = this.GetSprite();

    // eslint-disable-next-line max-len
    ctx.drawImage(spritesManager.Sheet, sprite[0], sprite[1], 16, 16, this.x, this.y, 16 * scale, 16 * scale);
  }

  private GetSprite() {
    switch (this.direction) {
      case Direction.Forward:
        return SpritesManager.PlayerForward;

      case Direction.Left:
        return SpritesManager.PlayerLeft;

      case Direction.Backward:
        return SpritesManager.PlayerBackward;

      case Direction.Right:
        return SpritesManager.PlayerRight;

      default:
        return [0, 0];
    }
  }
}
