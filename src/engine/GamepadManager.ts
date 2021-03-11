/* eslint class-methods-use-this: 0 */
import {
  EngineBus,
  GAMEPAD_CONNECTED,
  GAMEPAD_DISCONECTED,
  PLAYER_SHOT,
  PLAYER_MOVE_BACKWARD,
  PLAYER_MOVE_FORWARD,
  PLAYER_MOVE_LEFT,
  PLAYER_MOVE_RIGHT,
  PLAYER_STOP_BACKWARD,
  PLAYER_STOP_FORWARD,
  PLAYER_STOP_LEFT,
  PLAYER_STOP_RIGHT,
} from '@engine/EngineBus';

export default class GamepadManager {
  protected controllers: Record<string, GamepadEvent['gamepad']>;

  opt: {
    buttons: {
      up: number,
      right: number,
      down: number,
      left: number,
      a: number,
      b: number,
      c: number,
      d: number,
      start: number,
      select: number,
    }
    axes: {
      sensitivity: number
    }
  };

  constructor() {
    this.controllers = {};
    this.opt = {
      buttons: {
        up: 12,
        down: 13,
        left: 14,
        right: 15,
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        start: 8,
        select: 9,
      },
      axes: {
        sensitivity: 0.5,
      },
    };
  }

  public get gamepadsId() {
    return Object.keys(this.controllers);
  }

  public get hasGamepads() {
    return this.gamepadsId.length;
  }

  public init(): void {
    window.addEventListener('gamepadconnected', this.connected, false);
    window.addEventListener('gamepaddisconnected', this.disconected, false);
  }

  public destroy(): void {
    window.addEventListener('gamepadconnected', this.connected, false);
    window.addEventListener('gamepaddisconnected', this.disconected, false);
  }

  public updateState() {
    this.scanGamepads();

    EngineBus.emit(PLAYER_STOP_FORWARD);
    EngineBus.emit(PLAYER_STOP_RIGHT);
    EngineBus.emit(PLAYER_STOP_BACKWARD);
    EngineBus.emit(PLAYER_STOP_LEFT);

    Object.keys(this.controllers).forEach((id) => {
      const controller = this.controllers[id];
      const axes = { x: 0, y: 0 };

      // buttons
      for (let i = 0; i < controller.buttons.length; i += 1) {
        let val: number | GamepadButton = controller.buttons[i];

        if (typeof (val) === 'object') {
          val = val?.value;
        }

        if (val === 1) {
          this.buttonHandler(i);
        }
      }

      // axes
      for (let i = 0; i < controller.axes.length; i += 1) {
        const direction = controller.axes[i];

        // x
        if (i === 0) {
          axes.x = direction;
        }

        // y
        if (i === 1) {
          axes.y = direction;
        }
      }

      this.axesHandler(axes.x, axes.y);
    });
  }

  private connected = (event: GamepadEvent): void => {
    const { gamepad } = event;
    this.addGamepad(gamepad);
    EngineBus.emit(GAMEPAD_CONNECTED, gamepad);
  };

  private disconected = (event: GamepadEvent): void => {
    const { gamepad } = event;
    this.removeGamepad(gamepad);
    EngineBus.emit(GAMEPAD_DISCONECTED, gamepad);
  };

  private addGamepad(gamepad: Gamepad): void {
    this.controllers[gamepad.index] = gamepad;
  }

  private removeGamepad(gamepad: Gamepad) {
    delete this.controllers[gamepad.index];
  }

  private buttonHandler(buttonId: number): void {
    switch (buttonId) {
      case this.opt.buttons.a: EngineBus.emit(PLAYER_SHOT); break;
      case this.opt.buttons.b: EngineBus.emit(PLAYER_SHOT); break;
      case this.opt.buttons.c: EngineBus.emit(PLAYER_SHOT); break;
      case this.opt.buttons.d: EngineBus.emit(PLAYER_SHOT); break;
      case this.opt.buttons.up: EngineBus.emit(PLAYER_MOVE_FORWARD); break;
      case this.opt.buttons.down: EngineBus.emit(PLAYER_MOVE_BACKWARD); break;
      case this.opt.buttons.left: EngineBus.emit(PLAYER_MOVE_LEFT); break;
      case this.opt.buttons.right: EngineBus.emit(PLAYER_MOVE_RIGHT); break;
      case this.opt.buttons.start:
      case this.opt.buttons.select:
      default:
    }
  }

  private axesHandler(x: number, y: number) {
    if (x > this.opt.axes.sensitivity) {
      EngineBus.emit(PLAYER_MOVE_RIGHT);
    }

    if (x < -this.opt.axes.sensitivity) {
      EngineBus.emit(PLAYER_MOVE_LEFT);
    }

    if (y > this.opt.axes.sensitivity) {
      EngineBus.emit(PLAYER_MOVE_BACKWARD);
    }

    if (y < -this.opt.axes.sensitivity) {
      EngineBus.emit(PLAYER_MOVE_FORWARD);
    }
  }

  private scanGamepads(): void {
    const gamepads = navigator.getGamepads();

    for (let i = 0; i < gamepads.length; i += 1) {
      const gamepad = gamepads[i] as Gamepad | null;

      if (gamepad && (gamepad.index in this.controllers)) {
        this.controllers[gamepad.index] = gamepad;
      }
    }
  }
}

export const gamepadManager = new GamepadManager();
