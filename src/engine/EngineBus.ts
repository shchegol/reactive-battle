import EventBus from '@root/utils/eventBus';

export const EngineBus = new EventBus();

export const PLAYER_MOVE_LEFT = 'PLAYER/MOVE_LEFT';
export const PLAYER_MOVE_RIGHT = 'PLAYER/MOVE_RIGHT';
export const PLAYER_MOVE_FORWARD = 'PLAYER/MOVE_FORWARD';
export const PLAYER_MOVE_BACKWARD = 'PLAYER/MOVE_BACKWARD';
export const PLAYER_STOP_RIGHT = 'PLAYER/STOP_RIGHT';
export const PLAYER_STOP_LEFT = 'PLAYER/STOP_LEFT';
export const PLAYER_STOP_FORWARD = 'PLAYER/STOP_FORWARD';
export const PLAYER_STOP_BACKWARD = 'PLAYER/STOP_BACKWARD';
export const PLAYER_SHOT = 'PLAYER/SHOT';

export const SPRITE_CREATED = 'SPRITE/CREATED';
export const SPRITE_MOVED = 'SPRITE/MOVED';
export const SPRITE_DESTROYED = 'SPRITE/DESTROED';
export const SPRITE_COLLIDED = 'SPRITE/COLLIDED';
export const SPRITE_OUT_OF_BOUNDS = 'SPRITE/OUT_OF_BOUNDS';

export const LEVEL_START = 'LEVEL/START';
export const LEVEL_NEW_ROUND = 'LEVEL/NEW_ROUND';
export const LEVEL_WIN = 'LEVEL/WIN';

export const GAME_START = 'GAME/START';
export const GAME_PAUSE = 'GAME/PAUSE';
export const GAME_RESUME = 'GAME/RESUME';
export const GAME_OVER = 'GAME/OVER';
export const GAME_WIN = 'GAME/WIN';
