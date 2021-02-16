export const API_VERSION = 'v2';
export const API_URL = 'https://ya-praktikum.tech';
export const API_YANDEX_OAUTH_URL = 'https://oauth.yandex.ru/authorize';

export const IS_SERVER = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);
