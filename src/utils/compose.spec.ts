import { compose } from '@utils/compose';

describe('Utils/compose', () => {
  it('composes functions', () => {
    const fn1 = (val: string) => `fn1(${val})`;
    const fn2 = (val: string) => `fn2(${val})`;
    const fn3 = (val: string) => `fn3(${val})`;
    const composedFunction = compose(fn1, fn2, fn3);
    expect(composedFunction('inner')).toBe('fn1(fn2(fn3(inner)))');
  });
});
