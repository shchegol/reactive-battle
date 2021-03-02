export const API_YANDEX_VERSION = 'v2';
export const API_YANDEX_URL = 'https://ya-praktikum.tech';
export const API_YANDEX_OAUTH_URL = 'https://oauth.yandex.ru/authorize';
export const API_YANDEX_REDIRECT_URI = 'https://local.ya-praktikum.tech:5000';

export const API_VERSION = 'v1';
export const API_URL = `/api/${API_VERSION}`;

export const IS_SERVER = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);
