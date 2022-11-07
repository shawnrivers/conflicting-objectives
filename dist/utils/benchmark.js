"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmark = void 0;
const perf_hooks_1 = require("perf_hooks");
function benchmark(callback) {
    const start = perf_hooks_1.performance.now();
    const result = callback();
    const end = perf_hooks_1.performance.now();
    return {
        result,
        takes: `${(end - start).toFixed(2)}ms`,
    };
}
exports.benchmark = benchmark;
