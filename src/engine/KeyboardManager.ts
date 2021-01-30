export default class KeyboardManager {
  public rightPressed = false;

  public leftPressed = false;

  public upPressed = false;

  public downPressed = false;

  constructor() {
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  public init() {
    document.addEventListener('keydown', this.keyDownHandler, false);
    document.addEventListener('keyup', this.keyUpHandler, false);
  }

  public destroy() {
    document.removeEventListener('keydown', this.keyDownHandler, false);
    document.removeEventListener('keyup', this.keyUpHandler, false);
  }

  private keyDownHandler(event: KeyboardEvent) {
    event.preventDefault();

    switch (event.key) {
      case 'ArrowRight':
        this.rightPressed = true;
        break;

      case 'ArrowLeft':
        this.leftPressed = true;
        break;

      case 'ArrowDown':
        this.downPressed = true;
        break;

      case 'ArrowUp':
        this.upPressed = true;
        break;

      default:
        break;
    }
  }

  private keyUpHandler(event: KeyboardEvent) {
    event.preventDefault();

    switch (event.code) {
      case 'ArrowRight':
        this.rightPressed = false;
        break;

      case 'ArrowLeft':
        this.leftPressed = false;
        break;

      case 'ArrowDown':
        this.downPressed = false;
        break;

      case 'ArrowUp':
        this.upPressed = false;
        break;

      default:
        break;
    }
  }
}

export const keyboardManager = new KeyboardManager();
