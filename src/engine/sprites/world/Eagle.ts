import { EngineBus, GAME_OVER, SPRITE_COLLIDED } from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Bullet from '../Bullet';

/* eslint-disable class-methods-use-this */
export default class Eagle extends Sprite {
  private isBroken: boolean;

  constructor(x: number, y: number) {
    super(x, y, 16, 16);

    EngineBus.on(SPRITE_COLLIDED, (sprite1: Sprite, sprite2: Sprite) => this.onSpriteCollided(sprite1, sprite2));
  }

  protected GetSprite() {
    if (this.isBroken) {
      return [320, 32];
    }

    return [304, 32];
  }

  private onSpriteCollided(sprite1: Sprite, sprite2: Sprite) {
    if (!sprite1 || sprite2 !== this) {
      return;
    }

    if (sprite1 instanceof Bullet) {
      this.isBroken = true;
      EngineBus.emit(GAME_OVER, this);
    }
  }
}
