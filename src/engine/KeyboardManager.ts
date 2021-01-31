import {
  EngineBus, PLAYER_MOVE_BACKWARD, PLAYER_MOVE_FORWARD, PLAYER_MOVE_LEFT, PLAYER_MOVE_RIGHT, PLAYER_SHOT, PLAYER_STOP_BACKWARD, PLAYER_STOP_FORWARD, PLAYER_STOP_LEFT, PLAYER_STOP_RIGHT,
} from '@engine/EngineBus';

export default class KeyboardManager {
  public static init() {
    document.addEventListener('keyup', this.keyUpHandler, false);
    document.addEventListener('keydown', this.keyDownHandler, false);
  }

  public static destroy() {
    document.removeEventListener('keydown', this.keyDownHandler, false);
    document.removeEventListener('keyup', this.keyUpHandler, false);
  }

  private static keyDownHandler(event: KeyboardEvent) {
    event.preventDefault();

    switch (event.key) {
      case 'ArrowRight':
        EngineBus.emit(PLAYER_MOVE_RIGHT);
        break;

      case 'ArrowLeft':
        EngineBus.emit(PLAYER_MOVE_LEFT);
        break;

      case 'ArrowDown':
        EngineBus.emit(PLAYER_MOVE_BACKWARD);
        break;

      case 'ArrowUp':
        EngineBus.emit(PLAYER_MOVE_FORWARD);
        break;

      case ' ':
        EngineBus.emit(PLAYER_SHOT);
        break;

      default:
        break;
    }
  }

  private static keyUpHandler(event: KeyboardEvent) {
    event.preventDefault();

    switch (event.code) {
      case 'ArrowRight':
        EngineBus.emit(PLAYER_STOP_RIGHT);
        break;

      case 'ArrowLeft':
        EngineBus.emit(PLAYER_STOP_LEFT);
        break;

      case 'ArrowDown':
        EngineBus.emit(PLAYER_STOP_BACKWARD);
        break;

      case 'ArrowUp':
        EngineBus.emit(PLAYER_STOP_FORWARD);
        break;

      case ' ':
        break;

      default:
        break;
    }
  }
}
