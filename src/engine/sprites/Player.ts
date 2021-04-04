/* eslint-disable class-methods-use-this */
import Direction from '@engine/Direction';
import SpritesSheet from '@engine/SpritesSheet';
import Tank from '@engine/sprites/Tank';
import {
  EngineBus,
  GAME_OVER,
  PLAYER_DEAD,
  SPRITE_DESTROYED,
} from '@engine/EngineBus';
import Bullet from './Bullet';

export default class Player extends Tank {
  private lives: number = 3;

  constructor(x: number, y: number) {
    super(x, y, 13, 13);

    this.isPlayer = true;
  }

  public get Lives() {
    return this.lives;
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

  // обработка попаданий пули
  protected onBulletHit(bullet: Bullet) {
    EngineBus.emit(SPRITE_DESTROYED, bullet);

    this.lives -= 1;
    EngineBus.emit(PLAYER_DEAD, this);

    if (this.lives === 0) {
      EngineBus.emit(GAME_OVER);
    }
  }
}
