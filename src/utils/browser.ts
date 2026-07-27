export const copyText = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};

export const downloadText = (filename: string, content: string, mimeType = "text/plain"): void => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type: `${mimeType};charset=utf-8` }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
};
