import { aiManager } from '@engine/AIManager';
import Player from '@engine/sprites/Player';
import { playerManager } from '@engine/PlayerManager';
import { spritesManager } from '@engine/SpritesManager';
import Stage from '@engine/Stage';
import { enemiesManager } from './EnemiesManager';
import { EngineBus, GAME_OVER, SPRITE_CREATED } from './EngineBus';
import { GameStates } from './types/GameStates';
import { gameControl } from './GameControl';

export const CANVAS_WIDTH = 416;
export const CANVAS_HEIGHT = 416;

export default class Scene {
  private stage: Stage | null;

  private player: Player | null;

  constructor() {
    EngineBus.on(GAME_OVER, () => this.onGameOver());
  }

  public start() {
    this.stage = new Stage();
    this.player = new Player(132, 386);

    playerManager.init(this.player);
    enemiesManager.init();
    aiManager.init();

    this.stage.nextLevel();
    EngineBus.emit(SPRITE_CREATED, this.player);
  }

  public onGameOver() {
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
