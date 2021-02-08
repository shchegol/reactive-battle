import { GameAction } from '@store/actions/types';
import { GameState } from '@store/types';
import { GameActions } from '../actions/game';

const defaultState: GameState = {
  player: {
    name: 'PLAYER 1',
    lives: 2,
    score: 0,
    kills: 0,
  },
  enemies: 20,
};

export default function game(
  state = defaultState,
  action: GameAction,
): GameState {
  switch (action.type) {
    case GameActions.UPDATE_SCORE:
      return {
        ...state,
        player: {
          ...state.player,
          kills: state.player.kills + 1,
          score: state.player.score + 300,
        },
        enemies: state.enemies - 1,
      };
    default:
      return state;
  }
}
