import Sprite from './Sprite';

/* eslint-disable class-methods-use-this */
export default class Tank extends Sprite {
  constructor(x: number, y: number) {
    super(x, y, 16, 16);
  }
}
