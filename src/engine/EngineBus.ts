import EventBus from '@root/utils/EventBus';

export const EngineBus = new EventBus();

export const PlayerMoveLeft = 'PLAYER/MOVE_LEFT';
export const PlayerMoveRight = 'PLAYER/MOVE_RIGHT';
export const PlayerMoveForward = 'PLAYER/MOVE_FORWARD';
export const PlayerMoveBackward = 'PLAYER/MOVE_BACKWARD';
export const PlayerStopRight = 'PLAYER/STOP_RIGHT';
export const PlayerStopLeft = 'PLAYER/STOP_LEFT';
export const PlayerStopForward = 'PLAYER/STOP_FORWARD';
export const PlayerStopBackward = 'PLAYER/STOP_BACKWARD';
export const PlayerShot = 'PLAYER/SHOT';

export const SpriteCreated = 'SPRITE/CREATED';
