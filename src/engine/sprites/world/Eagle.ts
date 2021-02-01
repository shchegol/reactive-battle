import Sprite from '@engine/sprites/Sprite';
import { spritesSheet } from '@engine/SpritesSheet';

/* eslint-disable class-methods-use-this */
export default class Eagle extends Sprite {
  constructor(x: number, y: number) {
    super(x, y, 16, 16);
  }

  protected GetSprite() {
    return spritesSheet.Brick;
  }
}
