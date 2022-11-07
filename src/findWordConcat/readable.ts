import { WordConcat } from './types';

export function findWordConcat(wordList: string[]): WordConcat[] {
  const firstWordCandidates = findFirstWordCandidates(wordList);
  const secondWordCandidates = findSecondWordCandidates(
    wordList,
    firstWordCandidates
  );

  const wordConcatCandidates = secondWordCandidates.map(
    ([firstWord, secondWord]) => ({
      composed: firstWord + secondWord,
      composedBy: [firstWord, secondWord],
    })
  );

  const foundWordConcat = wordConcatCandidates.filter(({ composed }) =>
    wordList.includes(composed)
  );

  return foundWordConcat;
}

function findFirstWordCandidates(wordList: string[]): string[] {
  return wordList.filter((word) => word.length < 6);
}

function findSecondWordCandidates(
  wordList: string[],
  firstWordCandidates: string[]
): [firstWord: string, secondWord: string][] {
  const candidates: [firstWord: string, secondWord: string][] = [];

  firstWordCandidates.forEach((firstWord) => {
    const secondWordCandidates = wordList.filter(
      (word) => word.length === 6 - firstWord.length
    );
    secondWordCandidates.forEach((secondWord) => {
      candidates.push([firstWord, secondWord]);
    });
  });

  return candidates;
}
