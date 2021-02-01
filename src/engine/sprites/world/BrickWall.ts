/* eslint-disable class-methods-use-this */
import { spritesSheet } from '@engine/SpritesSheet';
import Wall from './Wall';

export default class BrickWall extends Wall {
  protected GetSprite() {
    return spritesSheet.Brick;
  }
}
