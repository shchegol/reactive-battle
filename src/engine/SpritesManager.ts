import { EngineBus, SPRITE_CREATED, SPRITE_DESTROYED } from './EngineBus';
import Sprite from './Sprite';

export default class SpritesManager {
  private sprites: Array<Sprite> = [];

  public Init() {
    EngineBus.on(SPRITE_CREATED, (sprite: Sprite) => this.onSpriteCreated(sprite));
    EngineBus.on(SPRITE_DESTROYED, (sprite: Sprite) => this.onSpriteDestroyed(sprite));
  }

  public get Sprites() {
    return this.sprites;
  }

  private onSpriteCreated(sprite: Sprite) {
    if (sprite) {
      this.sprites.push(sprite);
    }
  }

  private onSpriteDestroyed(sprite: Sprite) {
    if (sprite) {
      this.sprites = this.sprites.filter((s) => s !== sprite);
    }
  }
}

export const spritesManager = new SpritesManager();
