import Sprite from '../sprite';

/* eslint-disable class-methods-use-this */
export default class Eagle extends Sprite {
  constructor(x: number, y: number) {
    super(x, y, 16, 16);
  }

  protected GetSprite() {
    return [304, 32];
  }
}
