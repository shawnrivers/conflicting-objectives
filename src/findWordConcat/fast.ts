import { WordConcat } from './types';

// TODO: remove the duplicated
// ['al', 'bums'] and ['bums', 'al'] should be treated the same
export function findWordConcat(wordList: string[]): WordConcat[] {
  const result: WordConcat[] = [];

  const possibleComposed = wordList.filter((word) => word.length === 6);
  const possibleComposedBy = wordList.filter((word) => word.length < 6);

  for (const composed of possibleComposed) {
    const composedByCandidates: [string, string][] = [];
    for (let i = 1; i < 6; i++) {
      composedByCandidates.push([composed.slice(0, i), composed.slice(i, 6)]);
    }

    for (const composedBy of composedByCandidates) {
      const [firstWord, secondWord] = composedBy;
      if (
        possibleComposedBy.includes(firstWord) &&
        possibleComposedBy.includes(secondWord)
      ) {
        result.push({
          composed,
          composedBy,
        });
      }
    }
  }

  return result;
}
