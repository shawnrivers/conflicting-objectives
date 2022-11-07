import { WordConcat } from '../findWordConcat/types';
import { benchmark } from './benchmark';

export const logBenchmarkResult = (
  heading: string,
  benchmarkResult: ReturnType<typeof benchmark<() => WordConcat[]>>
) => {
  console.log(`\n## ${heading}`);
  console.log(`Took: ${benchmarkResult.takes}`);
  console.log(
    `Found ${benchmarkResult.result.length} word concat:\n`,
    benchmarkResult.result
  );
};
