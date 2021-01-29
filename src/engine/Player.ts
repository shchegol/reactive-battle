import Direction from './Direction';
import SpritesManager from './SpritesManager';
import Tank from './Tank';

export default class Player extends Tank {
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
}
