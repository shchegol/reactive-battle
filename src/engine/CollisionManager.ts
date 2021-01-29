import Sprite from './Sprite';

export default class CollisionManager {
  public static checkPlaygroundCollision(sprite: Sprite, newX: number, newY: number, context: CanvasRenderingContext2D) {
    const left = newX;
    const right = newX + sprite.Width;
    const top = newY;
    const bottom = newY + sprite.Height;

    return left < 0 || right > context.canvas.width || top < 0 || bottom > context.canvas.height;
  }

  public static checkSpritesCollision(sprite: Sprite, newX: number, newY: number, allSprites: Sprite[]) {
    const collideWith: Array<Sprite> = [];

    for (let index = 0; index < allSprites.length; index += 1) {
      const otherSprite = allSprites[index];

      if (CollisionManager.isCandidateForCollision(sprite, otherSprite)) {
        if (CollisionManager.didCollide(sprite, newX, newY, otherSprite)) {
          collideWith.push(otherSprite);
        }
      }
    }

    return collideWith;
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
