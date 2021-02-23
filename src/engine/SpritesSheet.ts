const sheet = require('@root/images/sprite-base.png').default;

export default class SpritesSheet {
  private spritesSheet: HTMLImageElement;

  private wasInit: boolean = false;

  public init() {
    if (this.wasInit) return;

    this.spritesSheet = new Image();
    this.spritesSheet.src = sheet;
    this.spritesSheet.onload = () => {
    };

    this.wasInit = true;
  }

  public get Sheet() {
    return this.spritesSheet;
  }

  public static get PlayerForward() {
    return [1, 2];
  }

  public static get PlayerLeft() {
    return [34, 1];
  }

  public static get PlayerBackward() {
    return [65, 2];
  }

  public static get PlayerRight() {
    return [97, 1];
  }
}

export const spritesSheet = new SpritesSheet();
