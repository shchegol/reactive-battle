import Player from './Player';
import Stage from './Stage';

export default class Scene {
  private stage: Stage = new Stage();

  private player: Player = new Player();

  public render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.stage.render(ctx);
    this.player.render(ctx);
  }
}
