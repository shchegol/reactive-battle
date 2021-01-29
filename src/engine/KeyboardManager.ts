import {
  EngineBus, PlayerMoveBackward, PlayerMoveForward, PlayerMoveLeft, PlayerMoveRight, PlayerShot, PlayerStopBackward, PlayerStopForward, PlayerStopLeft, PlayerStopRight,
} from './EngineBus';

export default class KeyboardManager {
  public rightPressed = false;

  public leftPressed = false;

  public upPressed = false;

  public downPressed = false;

  public spacePressed = false;

  // constructor() {
  // keyDownHandler = this.keyDownHandler.bind(this);
  // .keyUpHandler = this.keyUpHandler.bind(this);
  // }

  public static Init() {
    document.addEventListener('keyup', this.keyUpHandler, false);
    document.addEventListener('keydown', this.keyDownHandler, false);
  }

  private static keyDownHandler(event: KeyboardEvent) {
    event.preventDefault();

    switch (event.key) {
      case 'ArrowRight':
        EngineBus.emit(PlayerMoveRight);
        break;

      case 'ArrowLeft':
        EngineBus.emit(PlayerMoveLeft);
        break;

      case 'ArrowDown':
        EngineBus.emit(PlayerMoveBackward);
        break;

      case 'ArrowUp':
        EngineBus.emit(PlayerMoveForward);
        break;

      case ' ':
        EngineBus.emit(PlayerShot);
        break;

      default:
        break;
    }
  }

  private static keyUpHandler(event: KeyboardEvent) {
    event.preventDefault();

    switch (event.code) {
      case 'ArrowRight':
        EngineBus.emit(PlayerStopRight);
        break;

      case 'ArrowLeft':
        EngineBus.emit(PlayerStopLeft);
        break;

      case 'ArrowDown':
        EngineBus.emit(PlayerStopBackward);
        break;

      case 'ArrowUp':
        EngineBus.emit(PlayerStopForward);
        break;

      case ' ':
        break;

      default:
        break;
    }
  }
}

export const keyboardManager = new KeyboardManager();
