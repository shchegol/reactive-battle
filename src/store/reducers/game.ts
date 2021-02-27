import { GameAction, TankTypes } from '@store/actions/types';
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

const scoring = (prevScore: number, tankType: TankTypes): number => {
  const scores = {
    basic: 100,
    fast: 200,
    armor: 300,
    power: 400,
  };

  console.log(prevScore, tankType);

  return scores[tankType] + prevScore;
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
          score: scoring(state.player.score, action.payload.tankType),
        },
        enemies: state.enemies - 1,
      };
    case GameActions.CLEAR_SCORE:
      return {
        ...state,
        ...defaultState,
      };
    default:
      return state;
  }
}
