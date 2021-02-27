import {
  EngineBus, GAME_OVER, SPRITE_CREATED, SPRITE_DESTROYED,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Eagle from './sprites/world/Eagle';
import Spawn from './sprites/world/Spawn';

export default class SpritesManager {
  private sprites: Array<Sprite> = [];

  public start() {
    this.sprites = [];

    this.onSpriteCreated = this.onSpriteCreated.bind(this);
    this.onSpriteDestroyed = this.onSpriteDestroyed.bind(this);
    this.onGameOver = this.onGameOver.bind(this);

    EngineBus.on(SPRITE_CREATED, this.onSpriteCreated);
    EngineBus.on(SPRITE_DESTROYED, this.onSpriteDestroyed);
    EngineBus.on(GAME_OVER, this.onGameOver);
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

  private onGameOver() {
    this.sprites.forEach((sprite) => sprite.detach());
    this.sprites = [];

    EngineBus.off(SPRITE_CREATED, this.onSpriteCreated);
    EngineBus.off(SPRITE_DESTROYED, this.onSpriteDestroyed);
    EngineBus.off(GAME_OVER, this.onGameOver);
  }
}

export const spritesManager = new SpritesManager();
