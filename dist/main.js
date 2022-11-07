"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const findWordConcat_1 = require("./findWordConcat");
const benchmark_1 = require("./utils/benchmark");
const logging_1 = require("./utils/logging");
const readWordList_1 = require("./utils/readWordList");
const SIZE = undefined;
const wordList = (0, readWordList_1.readWordList)(path_1.default.join(__dirname, '../data/wordlist.txt')).slice(0, SIZE);
// const readableBenchmark = benchmark(() => readableFindWordConcat(wordList));
const fastBenchmark = (0, benchmark_1.benchmark)(() => (0, findWordConcat_1.fastFindWordConcat)(wordList));
const extendibleBenchmark = (0, benchmark_1.benchmark)(() => (0, findWordConcat_1.extendibleFindWordConcat)(wordList, {
    composedWordLength: 6,
    composedByWordsCount: 2,
}));
// LOGGING
console.log(`Word list size: ${wordList.length}`);
// logBenchmarkResult('Readable', readableBenchmark);
(0, logging_1.logBenchmarkResult)('Fast', fastBenchmark);
(0, logging_1.logBenchmarkResult)('Extendible', extendibleBenchmark);
