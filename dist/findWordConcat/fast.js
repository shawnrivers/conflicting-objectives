"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWordConcat = void 0;
function findWordConcat(wordList) {
    const result = [];
    const possibleComposed = wordList.filter((word) => word.length === 6);
    const possibleComposedBy = wordList.filter((word) => word.length < 6);
    for (const composed of possibleComposed) {
        const composedByCandidates = [];
        for (let i = 1; i < 6; i++) {
            composedByCandidates.push([composed.slice(0, i), composed.slice(i, 6)]);
        }
        for (const composedBy of composedByCandidates) {
            const [firstWord, secondWord] = composedBy;
            if (possibleComposedBy.includes(firstWord) &&
                possibleComposedBy.includes(secondWord)) {
                result.push({
                    composed,
                    composedBy,
                });
            }
        }
    }
    return result;
}
exports.findWordConcat = findWordConcat;
