import {
  EngineBus, GAME_PAUSE, GAME_RESUME, GAME_START,
} from './EngineBus';
import { GameStates } from './types/GameStates';

export default class GameControl {
  private state: GameStates = GameStates.NotStarted;

  public get State() {
    return this.state;
  }

  public init() {
    EngineBus.on(GAME_START, () => this.onStart());
    EngineBus.on(GAME_PAUSE, () => this.onPause());
    EngineBus.on(GAME_RESUME, () => this.onResume());
  }

  private onStart() {
    this.state = GameStates.Play;
  }

  private onPause() {
    this.state = GameStates.Pause;
  }

  private onResume() {
    this.state = GameStates.Play;
  }
}

export const gameControl = new GameControl();
