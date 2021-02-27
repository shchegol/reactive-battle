import Direction from './Direction';
import { EngineBus, LEVEL_NEW_ROUND } from './EngineBus';
import { playerManager } from './PlayerManager';
import EnemyTank from './sprites/enemies/EnemyTank';
import Player from './sprites/Player';
import Sprite from './sprites/Sprite';
import { spritesManager } from './SpritesManager';

const MAX_DIRECTION_MILEAGE = 32;

enum EnemyBehavior {
  Chaotic,
  ToPlayer,
  ToBase,
}

export default class AIManager {
  private behavior: EnemyBehavior = EnemyBehavior.Chaotic;

  constructor() {
    this.changeBehavior = this.changeBehavior.bind(this);
  }

  public init() {
    EngineBus.on(LEVEL_NEW_ROUND, this.changeBehavior);
  }

  public stop() {
    EngineBus.off(LEVEL_NEW_ROUND, this.changeBehavior);
  }

  public update() {
    const enemies = spritesManager.Sprites.filter((sprite) => sprite instanceof EnemyTank) as EnemyTank[];

    switch (this.behavior) {
      case EnemyBehavior.ToPlayer:
        AIManager.tryKillPlayer(enemies);
        break;

      case EnemyBehavior.ToBase:
        AIManager.tryKillBase(enemies);
        break;

      case EnemyBehavior.Chaotic:
      default:
        AIManager.randomMovement(enemies);
        break;
    }
  }

  private changeBehavior() {
    switch (this.behavior) {
      case EnemyBehavior.ToPlayer:
        this.behavior = EnemyBehavior.ToBase;
        break;

      case EnemyBehavior.ToBase:
        this.behavior = EnemyBehavior.Chaotic;
        break;

      case EnemyBehavior.Chaotic:
      default:
        this.behavior = EnemyBehavior.ToPlayer;
        break;
    }
  }

  private static randomMovement(enemies: EnemyTank[]) {
    enemies.forEach((enemy: EnemyTank) => {
      this.tankRandomMovement(enemy);
    });
  }

  private static tankRandomMovement(enemy: EnemyTank) {
    if (enemy.DirectionMileage === 0 || enemy.DirectionMileage < MAX_DIRECTION_MILEAGE) {
      enemy.move(enemy.Direction);
    } else {
      const rnd = AIManager.getRndInteger(0, 10);

      switch (rnd) {
        case 0:
          enemy.move(Direction.Left);
          break;

        case 1:
          enemy.move(Direction.Up);
          break;

        case 2:
          enemy.move(Direction.Right);
          break;

        case 3:
          enemy.move(Direction.Down);
          break;

        case 4:
        case 5:
        case 6:
          enemy.shot();
          break;

        default:
          enemy.move(enemy.Direction);
          break;
      }
    }
  }

  private static tryKillPlayer(enemies: EnemyTank[]) {
    if (playerManager.Player) {
      enemies.forEach((enemy: EnemyTank, index: number) => {
        if (index % 2 === 0) {
          this.tryKillTarget(playerManager.Player as Player, enemy);
        } else {
          AIManager.tankRandomMovement(enemy);
        }
      });
    } else {
      this.randomMovement(enemies);
    }
  }

  private static tryKillBase(enemies: EnemyTank[]) {
    const eagle = spritesManager.Eagle;
    if (eagle) {
      enemies.forEach((enemy: EnemyTank) => {
        AIManager.tryKillTarget(eagle, enemy);
      });
    }
  }

  private static tryKillTarget(target: Sprite, enemy: EnemyTank) {
    if (enemy.DirectionMileage === 0 || enemy.DirectionMileage < MAX_DIRECTION_MILEAGE) {
      enemy.move(enemy.Direction);
    } else if (Math.abs(enemy.X - target.X) < 2) {
      if (enemy.Y > target.Y) {
        enemy.move(Direction.Up);
      } else {
        enemy.move(Direction.Down);
      }
    } else if (enemy.X > target.X) {
      enemy.move(Direction.Left);
    } else if (enemy.Y > target.Y) {
      enemy.move(Direction.Up);
    } else if (enemy.X < target.X) {
      enemy.move(Direction.Right);
    } else if (enemy.Y < target.Y) {
      enemy.move(Direction.Down);
    }

    const shotRnd = AIManager.getRndInteger(0, 100);
    if (shotRnd > 95) {
      enemy.shot();
    }
  }

  private static getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export const aiManager = new AIManager();
