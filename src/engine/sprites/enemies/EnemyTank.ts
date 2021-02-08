import { EngineBus, SPRITE_DESTROYED } from '@engine/EngineBus';
import Tank from '@engine/sprites/Tank';
import Bullet from '@engine/sprites/Bullet';

export default class EnemyTank extends Tank {
  constructor(x: number, y: number, width: number = 13, height: number = 13) {
    super(x, y, width, height);

    this.isPlayer = false;
  }

  protected onBulletHit(bullet: Bullet) {
    super.onBulletHit(bullet);

    if (!(bullet.Tank instanceof EnemyTank)) {
      EngineBus.emit(SPRITE_DESTROYED, this);
      EngineBus.emit(SPRITE_DESTROYED, bullet);
    }
  }
}
