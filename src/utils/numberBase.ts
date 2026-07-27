const DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export type BaseParseErrorCode =
  | "empty"
  | "baseRange"
  | "fractional"
  | "signOnly"
  | "invalidSign"
  | "invalidWhitespace"
  | "invalidDigit";

export class BaseParseError extends Error {
  code: BaseParseErrorCode;
  character?: string;
  base?: number;
  allowedDigits?: string;

  constructor(
    code: BaseParseErrorCode,
    message: string,
    details: { character?: string; base?: number; allowedDigits?: string } = {}
  ) {
    super(message);
    this.name = "BaseParseError";
    this.code = code;
    this.character = details.character;
    this.base = details.base;
    this.allowedDigits = details.allowedDigits;
  }
}

export interface DetectedBaseInput {
  base: number;
  normalizedValue: string;
  prefix?: "0b" | "0o" | "0x";
}

export const normalizeNumberInput = (value: string): string => value.trim();

export const isSupportedBase = (base: number): boolean =>
  Number.isInteger(base) && base >= 2 && base <= 36;

export const getAllowedDigitsForBase = (base: number): string =>
  DIGITS.slice(0, Math.max(0, Math.min(base, DIGITS.length)));

export const digitValue = (character: string): number => {
  const normalized = character.toUpperCase();
  return DIGITS.indexOf(normalized);
};

export const isValidDigitForBase = (character: string, base: number): boolean => {
  const value = digitValue(character);
  return value >= 0 && value < base;
};

export const detectInputBase = (value: string): DetectedBaseInput => {
  const normalized = normalizeNumberInput(value);
  const negative = normalized.startsWith("-");
  const unsigned = negative ? normalized.slice(1) : normalized;
  const sign = negative ? "-" : "";
  const prefix = unsigned.slice(0, 2).toLowerCase();

  if (prefix === "0b") {
    return { base: 2, normalizedValue: `${sign}${unsigned.slice(2)}`, prefix: "0b" };
  }

  if (prefix === "0o") {
    return { base: 8, normalizedValue: `${sign}${unsigned.slice(2)}`, prefix: "0o" };
  }

  if (prefix === "0x") {
    return { base: 16, normalizedValue: `${sign}${unsigned.slice(2)}`, prefix: "0x" };
  }

  return { base: 10, normalizedValue: normalized };
};

const stripMatchingPrefix = (value: string, base: number): string => {
  const negative = value.startsWith("-");
  const unsigned = negative ? value.slice(1) : value;
  const sign = negative ? "-" : "";
  const prefix = unsigned.slice(0, 2).toLowerCase();

  if (
    (base === 2 && prefix === "0b") ||
    (base === 8 && prefix === "0o") ||
    (base === 16 && prefix === "0x")
  ) {
    return `${sign}${unsigned.slice(2)}`;
  }

  return value;
};

export const parseBaseInteger = (value: string, base: number): bigint => {
  if (!isSupportedBase(base)) {
    throw new BaseParseError("baseRange", "The base must be between 2 and 36.", { base });
  }

  const trimmed = normalizeNumberInput(value);
  if (!trimmed) {
    throw new BaseParseError("empty", "Enter a number to convert.", { base });
  }

  if (/[.,]/.test(trimmed)) {
    throw new BaseParseError("fractional", "Fractional values are not supported yet.", { base });
  }

  if (/\s/.test(trimmed)) {
    throw new BaseParseError("invalidWhitespace", "Whitespace is not valid inside the number.", {
      character: " ",
      base,
      allowedDigits: getAllowedDigitsForBase(base)
    });
  }

  const withoutPrefix = stripMatchingPrefix(trimmed, base);
  const isNegative = withoutPrefix.startsWith("-");
  const unsigned = isNegative ? withoutPrefix.slice(1) : withoutPrefix;

  if (!unsigned) {
    throw new BaseParseError("signOnly", "Enter digits after the minus sign.", { character: "-", base });
  }

  if (unsigned.includes("-") || trimmed.indexOf("-") > 0 || trimmed.split("-").length > 2) {
    throw new BaseParseError("invalidSign", "The minus sign can only appear once at the start.", {
      character: "-",
      base
    });
  }

  let result = 0n;
  const bigBase = BigInt(base);

  for (const character of unsigned) {
    const valueForDigit = digitValue(character);
    if (valueForDigit < 0 || valueForDigit >= base) {
      throw new BaseParseError("invalidDigit", `The digit "${character}" is not valid in base ${base}.`, {
        character,
        base,
        allowedDigits: getAllowedDigitsForBase(base)
      });
    }

    result = result * bigBase + BigInt(valueForDigit);
  }

  return isNegative && result !== 0n ? -result : result;
};

export const formatBaseInteger = (value: bigint, base: number): string => {
  if (!isSupportedBase(base)) {
    throw new BaseParseError("baseRange", "The base must be between 2 and 36.", { base });
  }

  if (value === 0n) {
    return "0";
  }

  const isNegative = value < 0n;
  let remaining = isNegative ? -value : value;
  const bigBase = BigInt(base);
  let output = "";

  while (remaining > 0n) {
    const remainder = remaining % bigBase;
    output = DIGITS[Number(remainder)] + output;
    remaining /= bigBase;
  }

  return isNegative ? `-${output}` : output;
};

export const addStandardPrefix = (value: string, base: number): string => {
  if (value === "0") return value;

  const negative = value.startsWith("-");
  const unsigned = negative ? value.slice(1) : value;
  const prefix = base === 2 ? "0b" : base === 8 ? "0o" : base === 16 ? "0x" : "";

  if (!prefix) return value;
  return `${negative ? "-" : ""}${prefix}${unsigned}`;
};
