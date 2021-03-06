import { aiManager } from '@engine/AIManager';
import Player from '@engine/sprites/Player';
import { playerManager } from '@engine/PlayerManager';
import { spritesManager } from '@engine/SpritesManager';
import Stage from '@engine/Stage';
import { enemiesManager } from './EnemiesManager';
import {
  EngineBus,
  GAME_OVER,
  GAME_WIN,
  LEVEL_WIN,
  PLAYER_STOP_BACKWARD,
  PLAYER_STOP_FORWARD,
  PLAYER_STOP_LEFT,
  PLAYER_STOP_RIGHT,
  SPRITE_CREATED,
} from './EngineBus';
import { GameStates } from './types/GameStates';
import { gameControl } from './GameControl';

export const CANVAS_WIDTH = 416;
export const CANVAS_HEIGHT = 416;

export default class Scene {
  private stage: Stage | null;

  private player: Player | null;

  constructor() {
    EngineBus.on(LEVEL_WIN, () => this.onLevelWin());
    EngineBus.on(GAME_OVER, () => this.onGameOver());
    EngineBus.on(GAME_WIN, () => this.onGameOver());
  }

  public init() {
    this.stage = new Stage();
    this.player = new Player(132, 386);

    playerManager.init(this.player);
    enemiesManager.init();
    aiManager.init();

    this.stage.nextLevel();
    EngineBus.emit(SPRITE_CREATED, this.player);
  }

  public onLevelWin() {
    playerManager.stop();
    enemiesManager.stop();
    aiManager.stop();
    spritesManager.deatachAllSprites();

    this.player = new Player(132, 386);

    playerManager.init(this.player);
    enemiesManager.init();
    aiManager.init();

    this.stage?.nextLevel();

    EngineBus.emit(SPRITE_CREATED, this.player);
  }

  public onGameOver() {
    EngineBus.emit(PLAYER_STOP_RIGHT);
    EngineBus.emit(PLAYER_STOP_LEFT);
    EngineBus.emit(PLAYER_STOP_BACKWARD);
    EngineBus.emit(PLAYER_STOP_FORWARD);

    this.stage?.gameOver();
    this.stage = null;

    this.player = null;

    playerManager.stop();
    enemiesManager.stop();
    aiManager.stop();
  }

  public render(context: CanvasRenderingContext2D) {
    if (gameControl.State === GameStates.Play) {
      playerManager.update(spritesManager.Sprites, context);
      aiManager.update();
    }

    context.fillStyle = 'black';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    this.stage?.render(context);
    this.player?.render(context);
  }
}

export const scene = new Scene();
