/* eslint-disable @typescript-eslint/no-unused-vars */
import Direction from '@engine/Direction';
import {
  EngineBus,
  PLAYER_MOVE_BACKWARD,
  PLAYER_MOVE_FORWARD,
  PLAYER_MOVE_LEFT,
  PLAYER_MOVE_RIGHT,
  PLAYER_SHOT,
  PLAYER_STOP_BACKWARD,
  PLAYER_STOP_FORWARD,
  PLAYER_STOP_LEFT,
  PLAYER_STOP_RIGHT,
} from '@engine/EngineBus';
import Player from '@engine/sprites/Player';
import Sprite from '@engine/sprites/Sprite';

export default class PlayerManager {
  private player: Player;

  private inMoveRight: boolean;

  private inMoveLeft: boolean;

  private inMoveForward: boolean;

  private inMoveBackward: boolean;

  private direction: Direction;

  public init(player: Player) {
    this.player = player;

    EngineBus.on(PLAYER_MOVE_LEFT, () => this.moveLeft());
    EngineBus.on(PLAYER_MOVE_RIGHT, () => this.moveRight());
    EngineBus.on(PLAYER_MOVE_FORWARD, () => this.moveForward());
    EngineBus.on(PLAYER_MOVE_BACKWARD, () => this.moveBackward());

    EngineBus.on(PLAYER_STOP_LEFT, () => this.stopLeft());
    EngineBus.on(PLAYER_STOP_RIGHT, () => this.stopRight());
    EngineBus.on(PLAYER_STOP_FORWARD, () => this.stopForward());
    EngineBus.on(PLAYER_STOP_BACKWARD, () => this.stopBackward());

    EngineBus.on(PLAYER_SHOT, () => this.shot());
  }

  public get Player() {
    return this.player;
  }

  public update(allSprites: Sprite[], context: CanvasRenderingContext2D) {
    if (this.inMoveLeft || this.inMoveRight || this.inMoveForward || this.inMoveBackward) {
      this.move(this.direction, allSprites, context);
    }
  }

  private moveLeft() {
    this.direction = Direction.Left;
    this.inMoveLeft = true;
  }

  private moveRight() {
    this.direction = Direction.Right;
    this.inMoveRight = true;
  }

  private moveForward() {
    this.direction = Direction.Up;
    this.inMoveForward = true;
  }

  private moveBackward() {
    this.direction = Direction.Down;
    this.inMoveBackward = true;
  }

  private stopLeft() {
    this.inMoveLeft = false;
  }

  private stopRight() {
    this.inMoveRight = false;
  }

  private stopForward() {
    this.inMoveForward = false;
  }

  private stopBackward() {
    this.inMoveBackward = false;
  }

  private move(direction: Direction, _allSprites: Sprite[], _context: CanvasRenderingContext2D) {
    this.player.move(direction);
  }

  private shot() {
    this.player.shot();
  }
}

export const playerManager = new PlayerManager();
