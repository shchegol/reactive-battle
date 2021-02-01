import CreateLevelSprites from '@engine/LevelGenerator';
import { Level1 } from '@engine/Levels';
import { spritesManager } from '@engine/SpritesManager';

export default class Stage {
  constructor() {
    CreateLevelSprites(Level1);
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    spritesManager.Sprites.forEach((e) => e.render(ctx));
  }
}
