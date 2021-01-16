/* eslint-disable class-methods-use-this */
import Wall from './Wall';

export default class BrickWall extends Wall {
  protected GetSprite() {
    return [256, 0];
  }
}
