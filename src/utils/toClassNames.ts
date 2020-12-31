/**
 * Converting Objects, Arrays and Primitives to String
 * @param args - arguments to convert
 * @example
 * // returns 'bar 1 baz foo test baz 3'
 * classesToString('bar', [1, null, 'baz', ['foo', 'test']], {baz: true}, '3');
 */

export default function toClassNames(...args: unknown[]): string {
  const classes = [];

  for (let i = 0; i < args.length; i += 1) {
    const arg: any = args[i];

    if (arg) {
      const argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        const inner = toClassNames(...arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString) {
          classes.push(arg.toString());
        } else {
          Object
            .keys(arg)
            .forEach((key) => {
              if (arg[key]) {
                classes.push(key);
              }
            });
        }
      }
    }
  }

  return classes.join(' ');
}
