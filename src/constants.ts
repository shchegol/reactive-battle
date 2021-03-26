const {
  SESSION_SECRET,
  CLIENT_API_YANDEX_OAUTH_URL,
  CLIENT_API_YANDEX_REDIRECT_URI,
  CLIENT_API_VERSION,
} = process.env;

const IS_SERVER = !(
  typeof window !== 'undefined'
    && window.document
    && window.document.createElement
);

const SESSION_EXPIRES = 86400000 * 30;

const API_VERSION = CLIENT_API_VERSION;
const API_URL = `/api/${CLIENT_API_VERSION}`;

const API_YANDEX_OAUTH_URL = CLIENT_API_YANDEX_OAUTH_URL;
const API_YANDEX_REDIRECT_URI = CLIENT_API_YANDEX_REDIRECT_URI;

export {
  API_YANDEX_OAUTH_URL,
  API_YANDEX_REDIRECT_URI,
  API_VERSION,
  API_URL,
  IS_SERVER,
  SESSION_EXPIRES,
  SESSION_SECRET,
};
