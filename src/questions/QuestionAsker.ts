```typescript
import { Questions } from './Questions';

export class QuestionAsker {
  private questions: Questions;

  constructor() {
    this.questions = new Questions();
  }

  askQuestions(chunk: string): Promise<string[]> {
    const questionPromises = this.questions.getQuestions().map(question => {
      return this.askQuestion(chunk, question);
    });

    return Promise.all(questionPromises);
  }

  private askQuestion(chunk: string, question: string): Promise<string> {
    // Here you would integrate with your AI model to ask the question
    // For the purpose of this starter app, we will just return a mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Mock response to '${question}' for chunk '${chunk}'`);
      }, 1000);
    });
  }
}
```