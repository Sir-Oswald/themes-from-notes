import { TikTok } from '../utils/tiktoken';

export class TextTokenCounter {
  private tiktoken: TikTok;

  constructor() {
    this.tiktoken = new TikTok();
  }

  public countTokens(text: string): number {
    return this.tiktoken.countTokens(text);
  }
}