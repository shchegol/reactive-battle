import { EngineBus, SPRITE_CREATED, SPRITE_DESTROYED } from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Eagle from './sprites/world/Eagle';
import Spawn from './sprites/world/Spawn';

export default class SpritesManager {
  private sprites: Array<Sprite> = [];

  private wasInit: boolean = false;

  public init() {
    if (this.wasInit) {
      return;
    }

    EngineBus.on(SPRITE_CREATED, (sprite: Sprite) => this.onSpriteCreated(sprite));
    EngineBus.on(SPRITE_DESTROYED, (sprite: Sprite) => this.onSpriteDestroyed(sprite));

    this.wasInit = true;
  }

  public get Sprites() {
    return this.sprites;
  }

  public get Eagle() {
    return this.sprites.find((sprite) => sprite instanceof Eagle);
  }

  public get Spawns() {
    return this.sprites.filter((sprite) => sprite instanceof Spawn);
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
