export class Questions {
    private static discoverQuestions: string[] = [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5",
        "Question 6",
        "Question 7",
        "Question 8",
        "Question 9"
    ];

    private static combineQuestions: string[] = [
        "Question 1",
        "Question 2",
        "Question 3",
        "Question 4",
        "Question 5",
        "Question 6",
        "Question 7",
        "Question 8",
        "Question 9"
    ];

    public static getDiscoverQuestions(): string[] {
        return this.discoverQuestions;
    }

    public static getCombineQuestions(): string[] {
        return this.combineQuestions;
    }
}