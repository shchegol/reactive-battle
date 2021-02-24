import { GameActions } from '@store/actions/game';
import { GamePayload } from '@store/actions/types';

export const updateScore = (payload: GamePayload) => ({
  type: GameActions.UPDATE_SCORE,
  payload,
});

export const clearScore = () => ({
  type: GameActions.CLEAR_SCORE,
});
