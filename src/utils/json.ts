export interface JsonPosition {
  line: number;
  column: number;
}

export interface JsonSummary {
  rootType: string;
  itemCount: string;
  characterCount: number;
}

export interface JsonParseResult {
  ok: boolean;
  value?: unknown;
  message?: string;
  position?: JsonPosition;
}

export const parseJson = (source: string): JsonParseResult => {
  try {
    return { ok: true, value: JSON.parse(source) };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid JSON.";
    const positionMatch = message.match(/position\s+(\d+)/i)?.[1];
    const offset = positionMatch ? Number(positionMatch) : Number.NaN;
    const position = Number.isFinite(offset) ? getPositionFromOffset(source, offset) : undefined;

    return { ok: false, message, position };
  }
};

export const formatJson = (value: unknown, space: number): string => JSON.stringify(value, null, space);

export const getJsonType = (value: unknown): string => {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
};

export const getJsonItemCount = (value: unknown): string => {
  if (Array.isArray(value)) return String(value.length);
  if (value && typeof value === "object") return String(Object.keys(value).length);
  return "-";
};

export const getJsonSummary = (value: unknown, source: string): JsonSummary => ({
  rootType: getJsonType(value),
  itemCount: getJsonItemCount(value),
  characterCount: source.length
});

export const getPositionFromOffset = (source: string, offset: number): JsonPosition => {
  const before = source.slice(0, offset);
  const lines = before.split(/\r\n|\r|\n/);

  return {
    line: lines.length,
    column: lines[lines.length - 1].length + 1
  };
};
