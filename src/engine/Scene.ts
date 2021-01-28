import AIManager from './AIManager';
import Player from './Player';
import PlayerManager from './PlayerManager';
import Stage from './Stage';

export default class Scene {
  private stage: Stage;

  private player: Player;

  private playerManager: PlayerManager;

  constructor() {
    this.stage = new Stage();
    this.player = new Player(130, 382);
    this.playerManager = new PlayerManager(this.player);
  }

  public render(context: CanvasRenderingContext2D) {
    this.playerManager.Execute(this.stage.Sprites, context);
    AIManager.Execute();

    context.fillStyle = 'black';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    this.stage.render(context);
    this.player.render(context);
  }
}
