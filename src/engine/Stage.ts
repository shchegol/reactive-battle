import createLevelSprites from '@engine/LevelGenerator';
import { gameLevels, Level } from '@engine/Levels';
import { spritesManager } from '@engine/SpritesManager';
import {
  EngineBus,
  GAME_WIN,
  LEVEL_NEW_ROUND,
  LEVEL_START,
} from './EngineBus';

const ROUND_TIME = 10000;

export default class Stage {
  private currentLevelIndex: number = -1;

  private currentLevel: Level | null;

  private round: null | ReturnType<typeof setTimeout> = null;

  public nextLevel() {
    this.currentLevelIndex += 1;

    if (this.currentLevelIndex >= gameLevels.length) {
      this.currentLevel = null;

      if (this.round) {
        clearInterval(this.round);
      }

      EngineBus.emit(GAME_WIN);
      return;
    }

    this.currentLevel = gameLevels[this.currentLevelIndex];

    createLevelSprites(this.currentLevel);

    EngineBus.emit(LEVEL_START, this.currentLevel);

    if (this.round) {
      clearInterval(this.round);
    }

    this.round = setInterval(Stage.onNewRound, ROUND_TIME);
  }

  public gameOver() {
    this.currentLevel = null;

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
