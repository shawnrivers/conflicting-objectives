import { performance } from 'perf_hooks';

type Function = (...args: any[]) => any;

export function benchmark<C extends Function = Function>(
  callback: C
): { result: ReturnType<C>; takes: string } {
  const start = performance.now();
  const result = callback();
  const end = performance.now();
  return {
    result,
    takes: `${(end - start).toFixed(2)}ms`,
  };
}
