import AIManager from './AIManager';
import Player from './Player';
import PlayerManager from './PlayerManager';
import { spritesManager } from './SpritesManager';
import Stage from './Stage';

export const CANVAS_WIDTH = 416;
export const CANVAS_HEIGHT = 416;

export default class Scene {
  private stage: Stage;

  private player: Player;

  private playerManager: PlayerManager;

  public init() {
    this.stage = new Stage();
    this.player = new Player(130, 382);
    this.playerManager = new PlayerManager(this.player);

    this.playerManager.subscribe();
  }

  public render(context: CanvasRenderingContext2D) {
    this.playerManager.Execute(spritesManager.Sprites, context);

    AIManager.Execute();

    context.fillStyle = 'black';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    this.stage.render(context);
    this.player.render(context);
  }
}
