/* eslint-disable class-methods-use-this */
import { EngineBus, SPRITE_COLLIDED, SPRITE_DESTROYED } from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Wall from '@engine/sprites/world/Wall';
import Bullet from '@engine/sprites/Bullet';

export default class ConcreteWall extends Wall {
  constructor(x: number = 0, y: number = 0) {
    super(x, y);

    this.onSpriteCollided = this.onSpriteCollided.bind(this);

    EngineBus.on(SPRITE_COLLIDED, this.onSpriteCollided);
  }

  protected GetSprite() {
    return [256, 72];
  }

  private onSpriteCollided(sprite1: Sprite, sprite2: Sprite) {
    if (!sprite1 || sprite2 !== this) return;

    if (sprite1 instanceof Bullet) {
      const bullet = sprite1;

      EngineBus.emit(SPRITE_DESTROYED, bullet);
    }
  }

  public detach() {
    super.detach();
    EngineBus.off(SPRITE_COLLIDED, this.onSpriteCollided);
  }
}
