export type LineSortType = "text" | "numeric" | "length";
export type LineSortDirection = "asc" | "desc";

export interface LineOptions {
  trim: boolean;
  skipEmpty: boolean;
}

export interface RemoveDuplicateLinesOptions extends LineOptions {
  caseSensitive: boolean;
}

export interface SortLinesOptions extends LineOptions {
  caseSensitive: boolean;
  unique: boolean;
  type: LineSortType;
  direction: LineSortDirection;
}

export interface LineResult {
  lines: string[];
  inputCount: number;
  outputCount: number;
  removedCount: number;
}

export const splitLines = (value: string): string[] => value.split(/\r\n|\r|\n/);

const applyBaseOptions = (lines: string[], options: LineOptions): string[] =>
  lines
    .map((line) => (options.trim ? line.trim() : line))
    .filter((line) => !options.skipEmpty || line.length > 0);

export const removeDuplicateLines = (
  value: string,
  options: RemoveDuplicateLinesOptions
): LineResult => {
  const originalLines = value.length > 0 ? splitLines(value) : [];
  const lines = applyBaseOptions(originalLines, options);
  const seen = new Set<string>();
  const uniqueLines: string[] = [];

  lines.forEach((line) => {
    const key = options.caseSensitive ? line : line.toLocaleLowerCase();
    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    uniqueLines.push(line);
  });

  return {
    lines: uniqueLines,
    inputCount: originalLines.length,
    outputCount: uniqueLines.length,
    removedCount: Math.max(0, lines.length - uniqueLines.length)
  };
};

const compareNumbers = (left: string, right: string, caseSensitive: boolean): number => {
  const leftNumber = Number(left);
  const rightNumber = Number(right);

  if (Number.isFinite(leftNumber) && Number.isFinite(rightNumber)) {
    return leftNumber - rightNumber;
  }

  return left.localeCompare(right, undefined, {
    numeric: true,
    sensitivity: caseSensitive ? "variant" : "base"
  });
};

export const sortLines = (value: string, options: SortLinesOptions): LineResult => {
  const originalLines = value.length > 0 ? splitLines(value) : [];
  let lines = applyBaseOptions(originalLines, options);

  if (options.unique) {
    const seen = new Set<string>();
    lines = lines.filter((line) => {
      const key = options.caseSensitive ? line : line.toLocaleLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  const direction = options.direction === "desc" ? -1 : 1;
  const sortedLines = [...lines].sort((left, right) => {
    const result = (() => {
      if (options.type === "numeric") return compareNumbers(left, right, options.caseSensitive);
      if (options.type === "length") return left.length - right.length || left.localeCompare(right);

      return left.localeCompare(right, undefined, {
        numeric: true,
        sensitivity: options.caseSensitive ? "variant" : "base"
      });
    })();

    return result * direction;
  });

  return {
    lines: sortedLines,
    inputCount: originalLines.length,
    outputCount: sortedLines.length,
    removedCount: Math.max(0, originalLines.length - sortedLines.length)
  };
};
