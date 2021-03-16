import { LeaderboardNewLeaderRequest, LeaderboardRequest, LeaderboardResponsePlayer } from '@api/types';
import axios from '@utils/yandexApiRequest';

const prefix = '/leaderboard';

export const addNewLeader = (data: LeaderboardNewLeaderRequest) => axios.post(`${prefix}`, data);
export const getAllLeaderboard = (options: LeaderboardRequest = {
  ratingFieldName: 'score',
  cursor: 0,
  limit: 20,
}): Promise<LeaderboardResponsePlayer[]> => axios.post(`${prefix}/all`, options);

export default {
  prefix,

  addNewLeader,
  getAllLeaderboard,
};
