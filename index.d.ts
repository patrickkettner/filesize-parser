declare namespace filesizeParser {
  interface Options {
    base?: 2 | 10;
  }
}

/**
 * Takes a human readable filesystem size string and returns the number of bytes it represents.
 *
 * @throws a string (not an Error) when the input can not be interpreted.
 */
declare function filesizeParser(input: string | number, options?: filesizeParser.Options): number;

export = filesizeParser;
