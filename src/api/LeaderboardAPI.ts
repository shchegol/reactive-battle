import { LeaderboardNewLeaderRequest, LeaderboardRequest } from '@api/types';
import axios from 'axios';

class LeaderboardAPI {
  static prefix = '/leaderboard';

  static addNewLeader(data: LeaderboardNewLeaderRequest) {
    return axios.post(`${LeaderboardAPI.prefix}`, data);
  }

  static getAllLeaderboard(options: LeaderboardRequest = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 20,
  }) {
    return axios.post(`${LeaderboardAPI.prefix}/all`, options);
  }
}

export default LeaderboardAPI;
