/* eslint-disable class-methods-use-this */

import { EngineBus, SPRITE_DESTROYED } from '@engine/EngineBus';
import { spritesSheet } from '../SpritesSheet';

export default class Sprite {
  protected x: number = 0;

  protected y: number = 0;

  protected width: number;

  protected height: number;

  protected scale: number = 2;

  constructor(x: number = 0, y: number = 0, width: number = 8, height: number = 8) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.onSpriteDestroyed = this.onSpriteDestroyed.bind(this);

    EngineBus.on(SPRITE_DESTROYED, this.onSpriteDestroyed);
  }

  public get X() {
    return this.x;
  }

  public get Y() {
    return this.y;
  }

  public get Width() {
    return this.width * this.scale;
  }

  public get Height() {
    return this.height * this.scale;
  }

  public render(ctx: CanvasRenderingContext2D) {
    const sprite = this.GetSprite();

    ctx.drawImage(spritesSheet.Sheet,
      sprite[0], sprite[1], this.width, this.height,
      this.x, this.y, this.Width, this.Height);

    // ctx.beginPath();
    // ctx.rect(this.X, this.Y, this.Width, this.Height);
    // ctx.strokeStyle = 'green';
    // ctx.stroke();
  }

  protected GetSprite() {
    return [0, 0];
  }

  protected onSpriteDestroyed(sprite: Sprite) {
    if (sprite !== this) return;

    this.detach();
  }

  public detach() {
    EngineBus.off(SPRITE_DESTROYED, this.onSpriteDestroyed);
  }
}
