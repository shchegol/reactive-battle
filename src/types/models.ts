export interface SignUpRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SignInRequest {
  login: string;
  password: string;
}

export interface UserResponse {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | undefined;
}

export type UserRequest = Partial<SignUpRequest>;

export interface PasswordRequest {
  oldPassword: string;
  newPassword: string;
}

/**
 * @param {Number} - player position
 * @param {String} - player name
 * @param {Number} - player score
 */
export interface LeaderboardData {
  name: string;
  score: number;
}

/**
 * @param {*} ratingFieldName - Leaderboard data object, any type
 * @param {string} ratingFieldName - Which field is used to sort
 * (if new value of the field more than old, data is stored)
 */
export interface LeaderboardNewLeaderRequest {
  data: LeaderboardData;
  ratingFieldName: string;
}

/**
 * @param {string} ratingFieldName - Which field is used to sort
 * @param {number} cursor - Used to paginate between pages
 * @param {number} limit - Maximum amount of leaders to return
 */
export interface LeaderboardRequest {
  ratingFieldName: string,
  cursor: number,
  limit: number,
}
