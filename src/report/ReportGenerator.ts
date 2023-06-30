import { TextAnalyzer } from '../textAnalysis/TextAnalyzer';
import { TextChunker } from '../textAnalysis/TextChunker';
import { QuestionAsker } from '../questions/QuestionAsker';
import { Report } from './Report';

export class ReportGenerator {
  private textAnalyzer: TextAnalyzer;
  private textChunker: TextChunker;
  private questionAsker: QuestionAsker;

  constructor() {
    this.textAnalyzer = new TextAnalyzer();
    this.textChunker = new TextChunker();
    this.questionAsker = new QuestionAsker();
  }

  public async generateReport(text: string): Promise<Report> {
    const analyzedText = this.textAnalyzer.analyze(text);
    const chunks = this.textChunker.chunk(analyzedText, 8000);
    let report = new Report();

    for (let chunk of chunks) {
      const answers = await this.questionAsker.ask(chunk);
      report.addAnswers(answers);
    }

    return report;
  }
}