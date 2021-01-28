/* eslint-disable class-methods-use-this */
import { spritesManager } from './SpritesManager';

export default class Sprite {
  private x: number = 0;

  private y: number = 0;

  private width: number;

  private height: number;

  constructor(x: number, y: number, width: number = 8, height: number = 8) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public render(ctx: CanvasRenderingContext2D) {
    const scale = 2;

    const sprite = this.GetSprite();

    ctx.drawImage(spritesManager.Sheet,
      sprite[0], sprite[1], this.width, this.height,
      this.x, this.y, this.width * scale, this.height * scale);
  }

  protected GetSprite() {
    return [0, 0];
  }
}
