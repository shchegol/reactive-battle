// Auth
export interface SignUpRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
}

export interface SignInRequest {
  login: string;
  password: string;
}

// User
export interface UserResponse {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  avatar: string | undefined;
}

export type UserRequest = Partial<SignUpRequest>;

export interface PasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface YaServiceResponse {
  service_id: string
}

// Leaderboard
/**
 * @param {String} - player name
 * @param {Number} - player score
 */
export interface LeaderboardData {
  login: string;
  score: number;
}

/**
 * @param {LeaderboardData} data - Leaderboard data object
 * @param {string} ratingFieldName - Which field is used to sort
 * (if new value of the field more than old, data is stored)
 */
export interface LeaderboardNewLeaderRequest {
  data: LeaderboardData;
  ratingFieldName: string;
}

export interface LeaderboardResponsePlayer {
  data: LeaderboardData
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

// Themes
export interface UserThemeResponse {
  id: number;
  themeId: number;
  ownerLogin: string;
}

export interface SiteThemeResponse {
  id: number;
  theme: string;
  description: string;
}
