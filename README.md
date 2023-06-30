# Text Analysis App

A starter react app based on the latest standards with Typescript.

## Purpose

The application is intended to analyze large corpuses of text (writer's notes) and extract key narrative elements. It will then combine these elements to generate a detailed, easy-to-read report.

## Basic Instructions

1. **BROWSE STEP:** The app will look in a folder and catalogue all the text-style documents.
2. **MEASURE STEP:** After constructing a list, it will measure the tokens and chunk the data if necessary to remain in the AI model's context. To measure this, it will use tiktoken. It should chunk each chunk 8000 tokens.
3. **DISCOVER STEP:** For each chunk it will ask the 9 questions. It will then store the AI's reply in a new list.
4. **COMBINE STEP:** Once it has run through all the available docs, it will take the AI reply list and combine and structure the insights in a readable and digestible format, using the second 9 questions.
5. **MEASURE STEP:** Again, if the reply list is too long for the context, it will measure the tokens and chunk the data if necessary to remain in the AI model's context. To measure this, it will use tiktoken.
6. It will loop through the COMBINE step until the final report is created.

## Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/your-repo/text-analysis-app.git
cd text-analysis-app
npm install
```

## Usage

Start the application.

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

Run the tests.

```bash
npm test
```

## Building

Build the app for production.

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)