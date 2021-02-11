import {
  EngineBus, GAME_PAUSE, GAME_RESUME, GAME_START,
} from './EngineBus';
import { GameStates } from './types/GameStates';

export default class GameControl {
  private state: GameStates = GameStates.NotStarted;

  private wasInit: boolean = false;

  public get State() {
    return this.state;
  }

  public init() {
    if (this.wasInit) {
      return;
    }

    EngineBus.on(GAME_START, () => this.onStart());
    EngineBus.on(GAME_PAUSE, () => this.onPause());
    EngineBus.on(GAME_RESUME, () => this.onResume());

    this.wasInit = true;
  }

  private onStart() {
    this.state = GameStates.Play;
  }

  private onPause() {
    this.pause();
  }

  private onResume() {
    this.state = GameStates.Play;
  }

  public pause() {
    this.state = GameStates.Pause;
  }
}

export const gameControl = new GameControl();
