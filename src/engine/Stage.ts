import createLevelSprites from '@engine/LevelGenerator';
import { Level, Level1 } from '@engine/Levels';
import { spritesManager } from '@engine/SpritesManager';
import { EngineBus, LEVEL_NEW_ROUND, LEVEL_START } from './EngineBus';

const ROUND_TIME = 10000;

export default class Stage {
  private level: Level | null;

  private round: number;

  public nextLevel() {
    this.level = Level1;

    createLevelSprites(this.level);

    EngineBus.emit(LEVEL_START, this.level);

    if (this.round) {
      clearInterval(this.round);
    }

    this.round = window.setInterval(Stage.onNewRound, ROUND_TIME);
  }

  public gameOver() {
    this.level = null;

    if (this.round) {
      clearInterval(this.round);
    }
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    spritesManager.Sprites.forEach((sprite) => sprite.render(ctx));
  }

  private static onNewRound() {
    EngineBus.emit(LEVEL_NEW_ROUND);
  }
}
