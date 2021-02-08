/* eslint-disable class-methods-use-this */
import Direction from '@engine/Direction';
import SpritesSheet from '@engine/SpritesSheet';
import Tank from '@engine/sprites/Tank';
import { EngineBus, SPRITE_DESTROYED } from '@engine/EngineBus';
import Bullet from './Bullet';

export default class Player extends Tank {
  constructor(x: number, y: number) {
    super(x, y, 13, 13);

    this.isPlayer = true;
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

  protected onBulletHit(bullet: Bullet) {
    // GOD MODE
    // EngineBus.emit(SPRITE_DESTROYED, this);
    EngineBus.emit(SPRITE_DESTROYED, bullet);
  }
}
