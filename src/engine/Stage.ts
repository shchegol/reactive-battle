import createLevelSprites from '@engine/LevelGenerator';
import { Level, Level1 } from '@engine/Levels';
import { spritesManager } from '@engine/SpritesManager';
import { EngineBus, LEVEL_START } from './EngineBus';

export default class Stage {
  private level: Level;

  public nextLevel() {
    this.level = Level1;

    createLevelSprites(this.level);

    EngineBus.emit(LEVEL_START, this.level);
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    spritesManager.Sprites.forEach((sprite) => sprite.render(ctx));
  }
}
