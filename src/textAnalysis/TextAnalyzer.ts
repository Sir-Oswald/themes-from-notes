```typescript
import { TextChunker } from './TextChunker';
import { TextTokenCounter } from './TextTokenCounter';
import { QuestionAsker } from '../questions/QuestionAsker';
import { Questions } from '../questions/Questions';

export class TextAnalyzer {
  private textChunker: TextChunker;
  private textTokenCounter: TextTokenCounter;
  private questionAsker: QuestionAsker;
  private questions: Questions;

  constructor() {
    this.textChunker = new TextChunker();
    this.textTokenCounter = new TextTokenCounter();
    this.questionAsker = new QuestionAsker();
    this.questions = new Questions();
  }

  public analyzeText(text: string): string[] {
    const chunks = this.textChunker.chunkText(text);
    const results: string[] = [];

    for (const chunk of chunks) {
      const tokens = this.textTokenCounter.countTokens(chunk);
      if (tokens > 8000) {
        throw new Error('Text chunk is too large for AI model context');
      }

      const questionResults = this.questions.getQuestions().map((question) => {
        return this.questionAsker.askQuestion(chunk, question);
      });

      results.push(...questionResults);
    }

    return results;
  }
}
```