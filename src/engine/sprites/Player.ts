import Direction from '@engine/Direction';
import SpritesSheet from '@engine/SpritesSheet';
import Tank from '@engine/sprites/Tank';

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
