const sheet = require('@root/images/sprite-base.png').default;
const brickSource = require('@root/images/engine/walls/brick.svg').default;
const concreteSource = require('@root/images/engine/walls/concrete.svg').default;
const forestSource = require('@root/images/engine/walls/forest.svg').default;
const iceSource = require('@root/images/engine/walls/ice.svg').default;
const waterSource = require('@root/images/engine/walls/water-0.svg').default;
const bulletSource = require('@root/images/engine/bullet.svg').default;
const playerSource = require('@root/images/engine/tanks/player-0.svg').default;

export default class SpritesSheet {
  private spritesSheet: HTMLImageElement;

  private sprites: Map<string, HTMLImageElement>;

  private isLoading: boolean;

  public init() {
    this.isLoading = true;

    // TODO не забыть убрать
    console.log(this.isLoading); // eslint-disable-line no-console

    this.spritesSheet = new Image();
    this.spritesSheet.src = sheet;
    this.spritesSheet.onload = () => {
      this.isLoading = false;
    };

    this.sprites = new Map<string, HTMLImageElement>();

    this.addImage('brick', brickSource);
    this.addImage('concrete', concreteSource);
    this.addImage('forest', forestSource);
    this.addImage('ice', iceSource);
    this.addImage('water', waterSource);
    this.addImage('bullet', bulletSource);
    this.addImage('player', playerSource);
  }

  private addImage(name: string, source: any) {
    const image = new Image();
    image.src = source;

    this.sprites.set(name, image);
  }

  public get Sheet() {
    return this.spritesSheet;
  }

  public get Brick() {
    return this.sprites.get('brick');
  }

  public get Concrete() {
    return this.sprites.get('concrete');
  }

  public get Forest() {
    return this.sprites.get('forest');
  }

  public get Ice() {
    return this.sprites.get('ice');
  }

  public get Water() {
    return this.sprites.get('water');
  }

  public get Bullet() {
    return this.sprites.get('bullet');
  }

  public get Player() {
    return this.sprites.get('player');
  }

  public static get PlayerForward() {
    return [0, 0];
  }

  public static get PlayerLeft() {
    return [32, 0];
  }

  public static get PlayerBackward() {
    return [64, 0];
  }

  public static get PlayerRight() {
    return [96, 0];
  }
}

export const spritesSheet = new SpritesSheet();
