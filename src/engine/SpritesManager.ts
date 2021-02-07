import { EngineBus, SPRITE_CREATED, SPRITE_DESTROYED } from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Eagle from './sprites/world/Eagle';

export default class SpritesManager {
  private sprites: Array<Sprite> = [];

  public init() {
    EngineBus.on(SPRITE_CREATED, (sprite: Sprite) => this.onSpriteCreated(sprite));
    EngineBus.on(SPRITE_DESTROYED, (sprite: Sprite) => this.onSpriteDestroyed(sprite));
  }

  public get Sprites() {
    return this.sprites;
  }

  public get Eagle() {
    return this.sprites.find((sprite) => sprite instanceof Eagle);
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
