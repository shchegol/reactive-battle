import { EngineBus, SpriteCreated } from './EngineBus';
import LevelGenerator from './LevelGenerator';
import { Level1 } from './Levels';
import Sprite from './sprite';

export default class Stage {
  private sprites: Array<Sprite> = [];

  constructor() {
    this.sprites.push(...LevelGenerator(Level1));

    EngineBus.on(SpriteCreated, (sprite: Sprite) => this.onSpriteCreated(sprite));
  }

  public get Sprites() {
    return this.sprites;
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    this.sprites.forEach((e) => e.render(ctx));
  }

  // eslint-disable-next-line class-methods-use-this
  private onSpriteCreated(sprite: Sprite) {
    if (sprite) {
      this.sprites.push(sprite);
    }
  }
}
