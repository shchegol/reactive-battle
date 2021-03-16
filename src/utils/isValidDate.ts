export default (d: any) => {
  if (Object.prototype.toString.call(d) === '[object Date]') {
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(d.getTime());
  }

  return false;
};
