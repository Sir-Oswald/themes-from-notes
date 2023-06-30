```typescript
export class Report {
    private content: string[];

    constructor() {
        this.content = [];
    }

    public addSection(section: string): void {
        this.content.push(section);
    }

    public getReport(): string {
        return this.content.join('\n');
    }
}
```