import {
  EngineBus, SPRITE_COLLIDED, SPRITE_MOVED, SPRITE_OUT_OF_BOUNDS,
} from '@engine/EngineBus';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@engine/Scene';
import Sprite from '@engine/sprites/Sprite';
import { spritesManager } from '@engine/SpritesManager';

export default class CollisionManager {
  public static subscribe() {
    EngineBus.on(SPRITE_MOVED, (sprite: Sprite) => CollisionManager.onSpriteMoved(sprite));
  }

  private static onSpriteMoved(sprite: Sprite) {
    if (CollisionManager.checkPlaygroundCollision(sprite, sprite.X, sprite.Y)) {
      EngineBus.emit(SPRITE_OUT_OF_BOUNDS, sprite);
    }

    const collideWith = CollisionManager.checkSpritesCollision(sprite, sprite.X, sprite.Y, spritesManager.Sprites);
    if (collideWith) {
      EngineBus.emit(SPRITE_COLLIDED, sprite, collideWith);
    }
  }

  public static checkPlaygroundCollision(sprite: Sprite, newX: number, newY: number) {
    const left = newX;
    const right = newX + sprite.Width;
    const top = newY;
    const bottom = newY + sprite.Height;

    return left < 0 || right > CANVAS_WIDTH || top < 0 || bottom > CANVAS_HEIGHT;
  }

  public static checkSpritesCollision(sprite: Sprite, newX: number, newY: number, allSprites: Sprite[]) {
    for (let index = 0; index < allSprites.length; index += 1) {
      const otherSprite = allSprites[index];

      if (CollisionManager.isCandidateForCollision(sprite, otherSprite)) {
        if (CollisionManager.didCollide(sprite, newX, newY, otherSprite)) {
          return otherSprite;
        }
      }
    }

    return null;
  }

  private static isCandidateForCollision(sprite1: Sprite, sprite2: Sprite) {
    return sprite1 !== sprite2;
  }

  private static didCollide(sprite1: Sprite, newX: number, newY: number, sprite2: Sprite) {
    const tolerance = 4;

    const left = newX + tolerance;
    const right = newX + sprite1.Width - tolerance;
    const top = newY + tolerance;
    const bottom = newY + sprite1.Height - tolerance;

    return CollisionManager.didCollideWithBoundingAreas(left, top, right, bottom, sprite2);
  }

  private static didCollideWithBoundingAreas(
    left: number, top: number,
    right: number, bottom: number,
    sprite2: Sprite,
  ) {
    return !(sprite2.X > right
      || sprite2.X + sprite2.Width < left
      || sprite2.Y > bottom
      || sprite2.Y + sprite2.Width < top);
  }
}
