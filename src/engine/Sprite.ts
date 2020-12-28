/* eslint-disable class-methods-use-this */
import { spritesManager } from './SpritesManager';

export default class Sprite {
  private x: number = 0;

  private y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public render(ctx: CanvasRenderingContext2D) {
    const scale = 2;

    const sprite = this.GetSprite();

    // eslint-disable-next-line max-len
    ctx.drawImage(spritesManager.Sheet, sprite[0], sprite[1], 16, 16, this.x, this.y, 16 * scale, 16 * scale);
  }

  protected GetSprite() {
    return [0, 0];
  }
}
