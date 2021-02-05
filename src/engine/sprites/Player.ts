import Direction from '@engine/Direction';
import SpritesSheet from '@engine/SpritesSheet';
import Tank from '@engine/sprites/Tank';

export default class Player extends Tank {
  constructor(x: number, y: number) {
    super(x, y, 13, 13);
  }

  public GetSprite() {
    switch (this.direction) {
      case Direction.Up:
        return SpritesSheet.PlayerForward;

      case Direction.Left:
        return SpritesSheet.PlayerLeft;

      case Direction.Down:
        return SpritesSheet.PlayerBackward;

      case Direction.Right:
        return SpritesSheet.PlayerRight;

      default:
        return [0, 0];
    }
  }
}
