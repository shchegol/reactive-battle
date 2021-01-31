import CreateLevelSprites from './LevelGenerator';
import { Level1 } from './Levels';
import { spritesManager } from './SpritesManager';

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
