/* eslint-disable import/prefer-default-export */
import { camelToSnakeCase } from '@root/utils/stringUtils';

export const objectKeysToSnakeCase = (obj: any) => Object.fromEntries(
  Object.entries(obj).map(([key, val]) => [camelToSnakeCase(key), val]),
);
