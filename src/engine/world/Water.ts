import Sprite from '../Sprite';

/* eslint-disable class-methods-use-this */
export default class Water extends Sprite {
  protected GetSprite() {
    return [256, 80];
  }
}
