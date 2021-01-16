const sheet = require('@root/images/sprite-base.png').default;

export default class SpritesManager {
  private spritesSheet: HTMLImageElement;

  private isLoading: boolean;

  public Init() {
    this.isLoading = true;

    // TODO не забыть убрать
    console.log(this.isLoading); // eslint-disable-line no-console

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
