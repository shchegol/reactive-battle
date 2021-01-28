import Direction from './Direction';
import SpritesManager from './SpritesManager';
import Tank from './Tank';

export default class Player extends Tank {
  private direction: Direction;

  public GetSprite() {
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

  public move(newX: number, newY: number, newDirection: Direction) {
    this.x = newX;
    this.y = newY;
    this.direction = newDirection;
  }
}
