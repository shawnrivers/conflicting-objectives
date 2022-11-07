"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWordConcat = void 0;
function findWordConcat(wordList, options = {
    composedWordLength: 6,
    composedByWordsCount: 2,
}) {
    const { composedWordLength, composedByWordsCount } = options;
    if (composedWordLength <= 1) {
        throw new Error(`options.composedWordLength must be an integer larger than 1.`);
    }
    if (composedByWordsCount <= 1) {
        throw new Error(`options.composedByWordsCount must be an integer larger than 1.`);
    }
    const result = [];
    const possibleComposed = wordList.filter((word) => word.length === composedWordLength);
    const possibleComposedBy = wordList.filter((word) => word.length < composedWordLength);
    for (const composed of possibleComposed) {
        const composedByCandidates = [];
        for (let i = 1; i < composedWordLength; i++) {
            composedByCandidates.push([
                composed.slice(0, i),
                composed.slice(i, composedWordLength),
            ]);
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
