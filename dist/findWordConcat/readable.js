"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWordConcat = void 0;
function findWordsConcatCandidates(wordList) {
    const candidates = [];
    const firstWordCandidates = wordList.filter((word) => word.length < 6);
    for (const firstWord of firstWordCandidates) {
        const secondWordCandidates = wordList.filter((word) => word.length === 6 - firstWord.length);
        for (const secondWord of secondWordCandidates) {
            const composedWord = firstWord + secondWord;
            candidates.push({
                composed: composedWord,
                composedBy: [firstWord, secondWord],
            });
        }
    }
    return candidates;
}
function findWordConcat(wordList) {
    const concatCandidates = findWordsConcatCandidates(wordList);
    return concatCandidates.filter((candidate) => wordList.includes(candidate.composed));
}
exports.findWordConcat = findWordConcat;
