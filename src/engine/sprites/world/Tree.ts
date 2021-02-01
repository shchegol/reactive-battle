import Sprite from '@engine/sprites/Sprite';
import { spritesSheet } from '@engine/SpritesSheet';

/* eslint-disable class-methods-use-this */
export default class Tree extends Sprite {
  protected GetSprite() {
    return spritesSheet.Forest;
  }
}
