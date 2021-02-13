import { LeaderboardNewLeaderRequest, LeaderboardRequest } from '@api/types';
import axios from 'axios';

class LeaderboardAPI {
  static prefix = '/leaderboard';

  static addNewLeader(data: LeaderboardNewLeaderRequest) {
    return axios.post(`${LeaderboardAPI.prefix}`, JSON.stringify(data), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  static getAllLeaderboard(options: LeaderboardRequest = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 20,
  }) {
    return axios.post(`${LeaderboardAPI.prefix}/all`, JSON.stringify(options), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default LeaderboardAPI;
