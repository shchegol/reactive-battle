import apiAxios from '@utils/apiRequest';
import { SiteThemeResponse, UserThemeResponse } from '@api/types';

const prefixThemes = '/themes';
const prefixUserThemes = '/user-themes';

export const getTheme = (params: {id?: number, name?: string}): Promise<SiteThemeResponse> => apiAxios.get(`${prefixThemes}`, { params });
export const setUserTheme = (data: {themeId: number, ownerLogin: string}) => apiAxios.post(`${prefixUserThemes}`, data);
export const getUserTheme = (login: string): Promise<UserThemeResponse> => apiAxios.get(`${prefixUserThemes}/${login}`);
export const updateUserTheme = (login: string, themeId: number) => apiAxios.patch(`${prefixUserThemes}/${login}`, { themeId });

export default {
  prefixThemes,
  prefixUserThemes,

  getTheme,
  setUserTheme,
  getUserTheme,
  updateUserTheme,
};
