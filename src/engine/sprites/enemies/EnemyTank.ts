import Tank from '@engine/sprites/Tank';

export default class EnemyTank extends Tank {
  constructor(x: number, y: number) {
    super(x, y, 13, 13);
  }
}
