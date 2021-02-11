import { API_URL, API_VERSION } from '@root/constants';
import { LeaderboardNewLeaderRequest, LeaderboardRequest } from '@api/types';
import axios from 'axios';

class LeaderboardAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/leaderboard`;

  static addNewLeader(data: LeaderboardNewLeaderRequest): Promise<Response> {
    return axios.post(`${LeaderboardAPI.prefix}`, JSON.stringify(data), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  static getAllLeaderboard(options: LeaderboardRequest = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 20,
  }): Promise<Response> {
    return axios.post(`${LeaderboardAPI.prefix}/all`, JSON.stringify(options), {
      withCredentials: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default LeaderboardAPI;
