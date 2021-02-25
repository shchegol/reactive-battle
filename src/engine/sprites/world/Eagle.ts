import {
  EngineBus,
  GAME_OVER,
  SPRITE_COLLIDED,
  SPRITE_DESTROYED,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Bullet from '../Bullet';

/* eslint-disable class-methods-use-this */
export default class Eagle extends Sprite {
  private isBroken: boolean;

  constructor(x: number, y: number) {
    super(x, y, 16, 16);

    this.onSpriteCollided = this.onSpriteCollided.bind(this);

    EngineBus.on(SPRITE_COLLIDED, this.onSpriteCollided);
  }

  protected GetSprite() {
    if (this.isBroken) {
      return [320, 32];
    }

    return [304, 32];
  }

  private onSpriteCollided(sprite1: Sprite, sprite2: Sprite) {
    if (!sprite1 || sprite2 !== this) return;

    if (sprite1 instanceof Bullet) {
      const bullet = sprite1;

      EngineBus.emit(SPRITE_DESTROYED, bullet);

      if (!this.isBroken) {
        this.isBroken = true;
        EngineBus.emit(GAME_OVER, this);
      }
    }
  }

  public detach() {
    super.detach();

    EngineBus.off(SPRITE_COLLIDED, this.onSpriteCollided);
  }
}
