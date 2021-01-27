import LevelGenerator from './LevelGenerator';
import { Level1 } from './Levels';
import Sprite from './sprite';

export default class Stage {
  private elements: Array<Sprite> = [];

  constructor() {
    this.elements.push(...LevelGenerator(Level1));
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    this.elements.forEach((e) => e.render(ctx));
  }
}
