import Direction from './Direction';
import SpritesSheet from './SpritesSheet';
import Tank from './Tank';

export default class Player extends Tank {
  public GetSprite() {
    switch (this.direction) {
      case Direction.Forward:
        return SpritesSheet.PlayerForward;

      case Direction.Left:
        return SpritesSheet.PlayerLeft;

      case Direction.Backward:
        return SpritesSheet.PlayerBackward;

      case Direction.Right:
        return SpritesSheet.PlayerRight;

      default:
        return [0, 0];
    }
  }
}
