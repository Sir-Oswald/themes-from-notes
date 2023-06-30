```typescript
class TextChunker {
  private static readonly CHUNK_SIZE = 8000;

  public static chunkText(text: string): string[] {
    const chunks: string[] = [];
    let startIndex = 0;

    while (startIndex < text.length) {
      const endIndex = Math.min(startIndex + TextChunker.CHUNK_SIZE, text.length);
      chunks.push(text.slice(startIndex, endIndex));
      startIndex = endIndex;
    }

    return chunks;
  }
}

export default TextChunker;
```