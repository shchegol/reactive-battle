/* eslint-disable class-methods-use-this */
// import Direction from '@engine/Direction';
import { spritesSheet } from '@engine/SpritesSheet';
import Tank from '@engine/sprites/Tank';

export default class Player extends Tank {
  public GetSprite() {
    return spritesSheet.Player;
    // switch (this.direction) {
    //   case Direction.Forward:
    //     return SpritesSheet.PlayerForward;

    //   case Direction.Left:
    //     return SpritesSheet.PlayerLeft;

    //   case Direction.Backward:
    //     return SpritesSheet.PlayerBackward;

    //   case Direction.Right:
    //     return SpritesSheet.PlayerRight;

    //   default:
    //     return [0, 0];
    // }
  }
}
