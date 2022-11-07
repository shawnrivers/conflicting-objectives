"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBenchmarkResult = void 0;
const logBenchmarkResult = (heading, benchmarkResult) => {
    console.log(`\n## ${heading}`);
    console.log(`Took: ${benchmarkResult.takes}`);
    console.log(`Found ${benchmarkResult.result.length} word concat:\n`, benchmarkResult.result);
};
exports.logBenchmarkResult = logBenchmarkResult;
