import Tank from '@engine/sprites/Tank';

export default class EnemyTank extends Tank {
  constructor(x: number, y: number, width: number = 13, height: number = 13) {
    super(x, y, width, height);
  }
}
