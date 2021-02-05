import AIManager from '@engine/AIManager';
import Player from '@engine/sprites/Player';
import PlayerManager from '@engine/PlayerManager';
import { spritesManager } from '@engine/SpritesManager';
import Stage from '@engine/Stage';

export const CANVAS_WIDTH = 416;
export const CANVAS_HEIGHT = 416;

export default class Scene {
  private stage: Stage;

  private player: Player;

  private playerManager: PlayerManager;

  public init() {
    this.stage = new Stage();
    this.player = new Player(132, 386);
    this.playerManager = new PlayerManager(this.player);

    this.playerManager.init();
  }

  public render(context: CanvasRenderingContext2D) {
    this.playerManager.update(spritesManager.Sprites, context);

    AIManager.update();

    context.fillStyle = 'black';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    this.stage.render(context);
    this.player.render(context);
  }
}
