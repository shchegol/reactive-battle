import { LeaderboardResponsePlayer } from '@api/types';
import axios from '@utils/apiRequest';

const prefix = '/leaderboard';

export const addNewLeader = (score: number) => axios.post(`${prefix}`, { score });
export const getAllLeaderboard = (): Promise<LeaderboardResponsePlayer[]> => axios.post(`${prefix}/all`);

export default {
  prefix,

  addNewLeader,
  getAllLeaderboard,
};
