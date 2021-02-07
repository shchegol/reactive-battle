import { ObjectString } from '@utils/types';

/**
 * Get URLSearchParams
 * @return {URLSearchParams} - current url params
 */
const getUrlSearchParams = (): URLSearchParams => {
  const { search } = window.location;
  return new URLSearchParams(search);
};

/**
 * Get URL params
 * @return {Object} - URL params in {param: value}
 */
export const getUrlParams = (): ObjectString => {
  const params: ObjectString = {};
  getUrlSearchParams().forEach((value, key) => { params[key] = value; });
  return params;
};

/**
 * Get URL param
 * @param {string} param - requested param
 * @return {string} - value
 */
export const getUrlParam = (param: string): string | null => getUrlSearchParams().get(param);
