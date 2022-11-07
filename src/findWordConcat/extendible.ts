import { WordConcat } from './types';

export function findWordConcat(
  wordList: string[],
  options: {
    composedWordLength: number;
  } = {
    composedWordLength: 6,
  }
): WordConcat[] {
  const { composedWordLength } = options;

  if (composedWordLength <= 1) {
    throw new Error(
      `options.composedWordLength must be an integer larger than 1.`
    );
  }

  const result: WordConcat[] = [];

  const possibleComposed = wordList.filter(
    (word) => word.length === composedWordLength
  );
  const possibleComposedBy = wordList.filter(
    (word) => word.length < composedWordLength
  );

  for (const composed of possibleComposed) {
    const composedByCandidates: string[][] = [];

    for (let i = 1; i < composedWordLength; i++) {
      composedByCandidates.push([
        composed.slice(0, i),
        composed.slice(i, composedWordLength),
      ]);
    }

    for (const composedBy of composedByCandidates) {
      if (composedBy.every((word) => possibleComposedBy.includes(word))) {
        result.push({
          composed,
          composedBy,
        });
      }
    }
  }

  return result;
}
