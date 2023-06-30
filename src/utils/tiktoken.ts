```typescript
// This is a utility file for token counting using tiktoken

import { Tokenizer } from 'tiktoken';

export class TikTokenCounter {
  private tokenizer: Tokenizer;

  constructor() {
    this.tokenizer = new Tokenizer();
  }

  public countTokens(text: string): number {
    const tokens = this.tokenizer.tokenize(text);
    return tokens.length;
  }

  public chunkText(text: string, chunkSize: number = 8000): string[] {
    const tokens = this.tokenizer.tokenize(text);
    const chunks = [];

    for (let i = 0; i < tokens.length; i += chunkSize) {
      const chunkTokens = tokens.slice(i, i + chunkSize);
      const chunkText = this.tokenizer.detokenize(chunkTokens);
      chunks.push(chunkText);
    }

    return chunks;
  }
}
```