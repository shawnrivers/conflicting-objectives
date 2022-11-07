import path from 'path';
import {
  fastFindWordConcat,
  readableFindWordConcat,
  extendibleFindWordConcat,
} from './findWordConcat';
import { benchmark } from './utils/benchmark';
import { logBenchmarkResult } from './utils/logging';
import { readWordList } from './utils/readWordList';

const SIZE: number | undefined = undefined;

const wordList = readWordList(
  path.join(__dirname, '../data/wordlist.txt')
).slice(0, SIZE);

// const readableBenchmark = benchmark(() => readableFindWordConcat(wordList));
// const fastBenchmark = benchmark(() => fastFindWordConcat(wordList));
const extendibleBenchmark = benchmark(() =>
  extendibleFindWordConcat(wordList, {
    composedWordLength: 6,
  })
);

// LOGGING

console.log(`Word list size: ${wordList.length}`);

// logBenchmarkResult('Readable', readableBenchmark);
// logBenchmarkResult('Fast', fastBenchmark);
logBenchmarkResult('Extendible', extendibleBenchmark);
