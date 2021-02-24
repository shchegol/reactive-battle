import { LeaderboardNewLeaderRequest, LeaderboardRequest } from '@api/types';
import axios from 'axios';

interface IResponsePlayer {
  data: {
    name?: string
    login?: string,
    score: number
  }
}

class LeaderboardAPI {
  static prefix = '/leaderboard';

  static addNewLeader(data: LeaderboardNewLeaderRequest) {
    return axios.post(`${LeaderboardAPI.prefix}`, data);
  }

  static getAllLeaderboard(options: LeaderboardRequest = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 20,
  }): Promise<IResponsePlayer[]> {
    return axios.post(`${LeaderboardAPI.prefix}/all`, options);
  }
}

export default LeaderboardAPI;
