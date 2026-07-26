import type { FAQItem } from "../types/tool";

export interface ToolContent {
  intro: string;
  howToUse: string;
  howItWorks: string;
  privacy: string;
  faqs: FAQItem[];
}

export const toolContentBySlug: Record<string, ToolContent> = {
  "word-counter": {
    intro:
      "Word Counter measures text length, structure, and estimated reading time as you type.",
    howToUse: "Paste or type text into the textarea. The stats update instantly.",
    howItWorks:
      "Words are matched from letters and numbers, characters include every typed character, and reading time uses a 200 words per minute baseline.",
    privacy: "The text is processed locally in your browser and is not sent to a server.",
    faqs: [
      { question: "Does it upload my text?", answer: "No. The calculation runs locally." },
      { question: "Can it count pasted content?", answer: "Yes. Paste text and the stats update immediately." },
      { question: "Why is reading time an estimate?", answer: "It uses a common 200 WPM baseline." }
    ]
  },
  "character-counter": {
    intro: "Character Counter helps you measure text length for posts, ads, forms, and metadata.",
    howToUse: "Enter text and optionally set a character limit to see remaining characters.",
    howItWorks:
      "The tool counts all characters, whitespace, characters without spaces, lines, words, and limit usage.",
    privacy: "All counting happens in the browser. Your text is not uploaded.",
    faqs: [
      { question: "Are spaces included?", answer: "Yes, and a separate no-spaces count is also shown." },
      { question: "Can I use it for meta descriptions?", answer: "Yes. Set a limit and watch the remaining count." },
      { question: "Does it save input?", answer: "No. Refreshing the page clears the input." }
    ]
  },
  "case-converter": {
    intro: "Case Converter changes text into common casing formats for writing and code cleanup.",
    howToUse: "Type text, choose a case mode, then copy the converted result.",
    howItWorks:
      "The browser transforms the input into uppercase, lowercase, title case, sentence case, kebab case, snake case, or camel case.",
    privacy: "Your text stays in the browser and is not stored.",
    faqs: [
      { question: "Does it support title case?", answer: "Yes. It capitalizes common word starts." },
      { question: "Can I create slugs?", answer: "Use kebab case for URL-friendly text." },
      { question: "Does it change the original input?", answer: "No. The converted result is shown separately." }
    ]
  },
  "lorem-ipsum-generator": {
    intro: "Lorem Ipsum Generator creates placeholder copy for mockups, wireframes, and layout tests.",
    howToUse: "Choose paragraphs, sentences per paragraph, and whether to start with classic lorem ipsum.",
    howItWorks:
      "The tool assembles deterministic placeholder words into readable sentence and paragraph blocks.",
    privacy: "Generation happens locally in the browser.",
    faqs: [
      { question: "Can I copy the output?", answer: "Yes. Use the Copy button after generating text." },
      { question: "Is it random?", answer: "It uses a local word pool and rotates words for varied output." },
      { question: "Can I generate short copy?", answer: "Yes. Lower the paragraph and sentence counts." }
    ]
  },
  "qr-code-generator": {
    intro: "QR Code Generator creates downloadable QR codes for URLs or plain text.",
    howToUse: "Enter text or a URL, choose size and margin, then download the PNG.",
    howItWorks: "The QR image is rendered to a canvas in the browser using a QR encoding library.",
    privacy: "The QR input is processed locally and is not sent to a backend.",
    faqs: [
      { question: "Can I download the QR code?", answer: "Yes. Download it as a PNG image." },
      { question: "Can it encode normal text?", answer: "Yes. URLs and plain text both work." },
      { question: "Is my QR content uploaded?", answer: "No. Rendering happens locally." }
    ]
  },
  "password-generator": {
    intro: "Password Generator creates strong random passwords with customizable rules.",
    howToUse: "Choose length and character sets, then generate and copy a password.",
    howItWorks:
      "The tool uses the browser Crypto API where available and guarantees at least one character from each selected set.",
    privacy: "Generated passwords are created locally and are not transmitted.",
    faqs: [
      { question: "Is the password generated securely?", answer: "It uses browser cryptographic randomness when available." },
      { question: "Can I exclude symbols?", answer: "Yes. Toggle symbols off before generating." },
      { question: "Does it save passwords?", answer: "No. Nothing is stored." }
    ]
  },
  "uuid-generator": {
    intro: "UUID Generator creates unique identifiers for databases, tests, and application code.",
    howToUse: "Choose how many UUIDs to generate, then copy the list.",
    howItWorks: "The browser uses `crypto.randomUUID()` when supported and falls back to random bytes.",
    privacy: "UUIDs are generated locally in your browser.",
    faqs: [
      { question: "Which UUID version is generated?", answer: "The tool generates version 4 UUIDs." },
      { question: "Can I generate multiple IDs?", answer: "Yes. Choose a quantity before generating." },
      { question: "Are IDs sent anywhere?", answer: "No. They are local browser values." }
    ]
  },
  "json-formatter": {
    intro: "JSON Formatter formats, minifies, and validates JSON snippets.",
    howToUse: "Paste JSON, choose Format or Minify, and copy the result.",
    howItWorks: "The tool parses JSON with `JSON.parse` and outputs it with `JSON.stringify`.",
    privacy: "JSON input stays in your browser.",
    faqs: [
      { question: "Does it validate JSON?", answer: "Yes. Invalid JSON shows an error message." },
      { question: "Can it minify JSON?", answer: "Yes. Use the Minify button." },
      { question: "Is JSON uploaded?", answer: "No. Parsing happens locally." }
    ]
  },
  "base64-encoder-decoder": {
    intro: "Base64 Encoder/Decoder converts text to and from Base64.",
    howToUse: "Enter text, choose Encode or Decode, then copy the result.",
    howItWorks: "The browser uses UTF-8 safe Base64 conversion with `TextEncoder` and `TextDecoder`.",
    privacy: "Input is converted locally and is not sent to a server.",
    faqs: [
      { question: "Does it support Unicode?", answer: "Yes. It uses UTF-8 conversion." },
      { question: "What happens with invalid Base64?", answer: "The tool shows an error instead of crashing." },
      { question: "Can I copy output?", answer: "Yes. Use the Copy button." }
    ]
  },
  "url-encoder-decoder": {
    intro: "URL Encoder/Decoder converts text into URL-safe encoded strings and back.",
    howToUse: "Paste a value, choose Encode or Decode, and copy the output.",
    howItWorks: "The tool uses `encodeURIComponent` and `decodeURIComponent` in the browser.",
    privacy: "No URL data is uploaded.",
    faqs: [
      { question: "Can it decode query parameters?", answer: "Yes, paste the encoded component value." },
      { question: "What if decoding fails?", answer: "The tool shows an error for malformed input." },
      { question: "Does it encode full URLs?", answer: "It is best for URL components and parameter values." }
    ]
  },
  "timestamp-converter": {
    intro: "Timestamp Converter translates Unix timestamps and readable dates.",
    howToUse: "Enter a Unix timestamp or date-time value and convert between formats.",
    howItWorks: "It creates JavaScript Date values and displays local, UTC, ISO, and Unix outputs.",
    privacy: "Date conversion runs locally in the browser.",
    faqs: [
      { question: "Does it support seconds and milliseconds?", answer: "Yes. It detects common Unix timestamp lengths." },
      { question: "Which timezone is local?", answer: "The local timezone is your browser timezone." },
      { question: "Is any date saved?", answer: "No. Values stay on the page." }
    ]
  },
  "color-converter": {
    intro: "Color Converter translates HEX colors into RGB and HSL values.",
    howToUse: "Enter a HEX color, preview it, and copy the converted values.",
    howItWorks: "The browser parses HEX channels and calculates RGB and HSL values.",
    privacy: "Color conversion runs locally.",
    faqs: [
      { question: "Does it support short HEX?", answer: "Yes. Values like #0f8 are expanded." },
      { question: "Can I preview the color?", answer: "Yes. A swatch updates with the parsed color." },
      { question: "Can I copy each format?", answer: "Yes. Use the copy buttons next to the results." }
    ]
  },
  "percentage-calculator": {
    intro: "Percentage Calculator handles common percent, change, and ratio calculations.",
    howToUse: "Enter values in one of the calculator rows and the result updates instantly.",
    howItWorks:
      "It calculates percent of a number, what percent one number is of another, and percentage change.",
    privacy: "All calculations run locally in the browser.",
    faqs: [
      { question: "Can it calculate percent increase?", answer: "Yes. Use the change calculator." },
      { question: "Does it round results?", answer: "Results are rounded for readability." },
      { question: "Are values stored?", answer: "No. They are only used in the browser." }
    ]
  }
};
