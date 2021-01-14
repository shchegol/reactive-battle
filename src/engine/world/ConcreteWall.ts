/* eslint-disable class-methods-use-this */
import Wall from './Wall';

export default class ConcreteWall extends Wall {
  protected GetSprite() {
    return [256, 72];
  }
}
