import apiAxios from '@root/utils/apiRequest';
import { SiteThemeResponse, UserThemeResponse } from '@api/types';

class ThemeAPI {
  static prefixThemes = '/themes';

  static prefixUserThemes = '/user-themes';

  static getTheme(params: {id?: number, name?: string}): Promise<SiteThemeResponse> {
    return apiAxios.get(`${ThemeAPI.prefixThemes}`, { params });
  }

  static setUserTheme(data: {themeId: number, ownerLogin: string}) {
    return apiAxios.post(`${ThemeAPI.prefixUserThemes}`, data);
  }

  static getUserTheme(login: string): Promise<UserThemeResponse> {
    return apiAxios.get(`${ThemeAPI.prefixUserThemes}/${login}`);
  }

  static updateUserTheme(login: string, themeId: number) {
    return apiAxios.patch(`${ThemeAPI.prefixUserThemes}/${login}`, { themeId });
  }
}

export default ThemeAPI;
