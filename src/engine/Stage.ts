import BrickWall from './world/BrickWall';
import ConcreteWall from './world/ConcreteWall';
import Ice from './world/Ice';
import Tree from './world/Tree';
import Wall from './world/Wall';

export default class Stage {
  private elements: Array<Wall> = [];

  constructor() {
    this.elements.push(new BrickWall(0, 50));
    this.elements.push(new BrickWall(32, 50));
    this.elements.push(new BrickWall(64, 50));
    this.elements.push(new BrickWall(96, 50));
    this.elements.push(new BrickWall(128, 50));

    this.elements.push(new ConcreteWall(192, 64));
    this.elements.push(new ConcreteWall(224, 64));
    this.elements.push(new ConcreteWall(256, 64));
    this.elements.push(new ConcreteWall(288, 64));

    this.elements.push(new Tree(256, 128));
    this.elements.push(new Tree(288, 128));
    this.elements.push(new Tree(320, 128));
    this.elements.push(new Tree(352, 128));

    this.elements.push(new Ice(64, 160));
    this.elements.push(new Ice(96, 160));
    this.elements.push(new Ice(320, 160));
    this.elements.push(new Ice(352, 160));
  }

  public render(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, 800, 800);
    ctx.stroke();

    this.elements.forEach((e) => e.render(ctx));
  }
}
