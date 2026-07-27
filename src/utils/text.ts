export interface TextStats {
  wordCount: number;
  characterCount: number;
  characterCountNoSpaces: number;
  sentenceCount: number;
  paragraphCount: number;
  lineCount: number;
  readingTimeMinutes: number;
}

const WORD_PATTERN = /[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)*/gu;

export const getTextStats = (text: string): TextStats => {
  const trimmedText = text.trim();
  const words = trimmedText.match(WORD_PATTERN) ?? [];
  const sentenceMatches = trimmedText.match(/[^.!?\n]+[.!?]+|[^.!?\n]+$/g) ?? [];
  const paragraphs = trimmedText
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return {
    wordCount: words.length,
    characterCount: text.length,
    characterCountNoSpaces: text.replace(/\s/g, "").length,
    sentenceCount: trimmedText ? sentenceMatches.length : 0,
    paragraphCount: trimmedText ? paragraphs.length : 0,
    lineCount: text.length > 0 ? text.split(/\r\n|\r|\n/).length : 0,
    readingTimeMinutes: words.length ? Math.max(1, Math.ceil(words.length / 200)) : 0
  };
};
