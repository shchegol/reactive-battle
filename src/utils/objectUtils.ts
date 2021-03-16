/* eslint-disable import/prefer-default-export */
import { camelToSnakeCase } from '@utils/stringUtils';

export const objectKeysToSnakeCase = (obj: any) => {
  if (!obj || !Object.keys(obj).length) {
    return obj;
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [camelToSnakeCase(key), val]),
  );
};
