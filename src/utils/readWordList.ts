import * as fs from 'fs';

export function readWordList(
  pathname: string,
  options: Partial<{ ignoreCase: boolean }> = {}
): string[] {
  const { ignoreCase = false } = options;
  const file = fs.readFileSync(pathname, {
    encoding: 'utf-8',
  });
  const wordList = file.split('\n');
  return wordList.map((word) => (ignoreCase ? word.toLocaleLowerCase() : word));
}
