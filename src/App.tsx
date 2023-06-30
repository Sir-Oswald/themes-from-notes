import React from 'react';
import { TextAnalyzer } from './textAnalysis/TextAnalyzer';
import { TextChunker } from './textAnalysis/TextChunker';
import { TextCataloguer } from './textAnalysis/TextCataloguer';
import { TextTokenCounter } from './textAnalysis/TextTokenCounter';
import { QuestionAsker } from './questions/QuestionAsker';
import { Questions } from './questions/Questions';
import { tiktoken } from './utils/tiktoken';
import { ReportGenerator } from './report/ReportGenerator';
import { Report } from './report/Report';

class App extends React.Component {
  textAnalyzer: TextAnalyzer;
  textChunker: TextChunker;
  textCataloguer: TextCataloguer;
  textTokenCounter: TextTokenCounter;
  questionAsker: QuestionAsker;
  questions: Questions;
  reportGenerator: ReportGenerator;
  report: Report;

  constructor(props: any) {
    super(props);
    this.textAnalyzer = new TextAnalyzer();
    this.textChunker = new TextChunker();
    this.textCataloguer = new TextCataloguer();
    this.textTokenCounter = new TextTokenCounter();
    this.questionAsker = new QuestionAsker();
    this.questions = new Questions();
    this.reportGenerator = new ReportGenerator();
    this.report = new Report();
  }

  componentDidMount() {
    // BROWSE STEP
    const documents = this.textCataloguer.catalogue();

    // MEASURE STEP
    const tokens = this.textTokenCounter.countTokens(documents);
    const chunks = this.textChunker.chunk(tokens, 8000);

    // DISCOVER STEP
    const aiReplies = chunks.map(chunk => this.questionAsker.ask(chunk, this.questions.get()));

    // COMBINE STEP
    this.report = this.reportGenerator.generate(aiReplies, this.questions.get());

    // MEASURE STEP
    const reportTokens = this.textTokenCounter.countTokens(this.report.get());
    if (reportTokens > 8000) {
      const reportChunks = this.textChunker.chunk(reportTokens, 8000);
      this.report.set(reportChunks);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Text Analysis App</h1>
        </header>
        <main>
          <p>{this.report.get()}</p>
        </main>
      </div>
    );
  }
}

export default App;