```typescript
import fs from 'fs';
import path from 'path';

class TextCataloguer {
  private textFiles: string[] = [];

  constructor(private directory: string) {}

  public catalogueTextFiles(): void {
    const files = fs.readdirSync(this.directory);
    this.textFiles = files.filter(file => path.extname(file) === '.txt');
  }

  public getTextFiles(): string[] {
    return this.textFiles;
  }
}

export default TextCataloguer;
```