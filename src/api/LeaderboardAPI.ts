import { API_URL, API_VERSION } from '@root/constants';
import { LeaderboardNewLeaderRequest, LeaderboardRequest } from '@root/types/models';

class LeaderboardAPI {
  static prefix = `${API_URL}/api/${API_VERSION}/leaderboard`;

  static addNewLeader(data: LeaderboardNewLeaderRequest): Promise<Response> {
    return fetch(`${LeaderboardAPI.prefix}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static getAllLeaderboard(options: LeaderboardRequest = {
    ratingFieldName: 'position',
    cursor: 0,
    limit: 0,
  }): Promise<Response> {
    return fetch(`${LeaderboardAPI.prefix}/all`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    });
  }
}

export default LeaderboardAPI;
