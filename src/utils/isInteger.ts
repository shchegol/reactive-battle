export function isInteger(num: any) {
  // eslint-disable-next-line no-bitwise
  return (num ^ 0) === num;
}
