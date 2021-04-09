import { pipe } from '@utils/pipe';

describe('Utils/pipe', () => {
  it('pipes functions', () => {
    const fn1 = (val: string) => `fn1(${val})`;
    const fn2 = (val: string) => `fn2(${val})`;
    const fn3 = (val: string) => `fn3(${val})`;

    const pipedFunction = pipe(fn1, fn2, fn3);

    expect(pipedFunction('inner')).toBe('fn3(fn2(fn1(inner)))');
  });

  it('pipes functions with different initial type', () => {
    const fn1 = (val: string, num: number) => `fn1(${val}-${num})`;
    const fn2 = (val: string) => `fn2(${val})`;
    const fn3 = (val: string) => `fn3(${val})`;
    const pipedFunction = pipe(fn1, fn2, fn3);

    expect(pipedFunction('inner', 2)).toBe('fn3(fn2(fn1(inner-2)))');
  });
});
