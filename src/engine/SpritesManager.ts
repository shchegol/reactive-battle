const sheet = require('@root/images/sprite-base.png').default;

export default class SpritesManager {
  private spritesSheet: HTMLImageElement;

  private isLoading: boolean;

  public Load() {
    this.isLoading = true;

    console.log(this.isLoading);

    this.spritesSheet = new Image();
    this.spritesSheet.src = sheet;
    this.spritesSheet.onload = () => {
      this.isLoading = false;
    };
  }

  public get Sheet() {
    return this.spritesSheet;
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

export const spritesManager = new SpritesManager();
