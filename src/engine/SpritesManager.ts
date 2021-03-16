import {
  EngineBus, GAME_OVER, GAME_WIN, LEVEL_WIN, SPRITE_CREATED, SPRITE_DESTROYED,
} from '@engine/EngineBus';
import Sprite from '@engine/sprites/Sprite';
import Eagle from './sprites/world/Eagle';
import Spawn from './sprites/world/Spawn';

export default class SpritesManager {
  private sprites: Array<Sprite> = [];

  public init() {
    this.sprites = [];

    this.onSpriteCreated = this.onSpriteCreated.bind(this);
    this.onSpriteDestroyed = this.onSpriteDestroyed.bind(this);
    this.onGameOver = this.onGameOver.bind(this);

    EngineBus.on(SPRITE_CREATED, this.onSpriteCreated);
    EngineBus.on(SPRITE_DESTROYED, this.onSpriteDestroyed);
    EngineBus.on(GAME_OVER, this.onGameOver);
    EngineBus.on(GAME_WIN, this.onGameOver);
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

  public deatachAllSprites() {
    this.sprites.forEach((sprite) => sprite.detach());
    this.sprites = [];
  }

  private onGameOver() {
    this.deatachAllSprites();

    EngineBus.off(SPRITE_CREATED, this.onSpriteCreated);
    EngineBus.off(SPRITE_DESTROYED, this.onSpriteDestroyed);
    EngineBus.off(LEVEL_WIN, this.onGameOver);
    EngineBus.off(GAME_OVER, this.onGameOver);
    EngineBus.off(GAME_WIN, this.onGameOver);
  }
}

export const spritesManager = new SpritesManager();
