export interface Cloneable {
  clone(): Cloneable;
}

export class Document implements Cloneable {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  describe(): string {
    return `Document: "${this.title}" by ${this.author} - ${this.content}`;
  }
}

export class DocumentRegistry {
  private documents: Map<string, Document> = new Map();

  registerDocument(key: string, document: Document): void {
    this.documents.set(key, document);
  }

  getDocument(key: string): Document | undefined {
    const prototype = this.documents.get(key);
    return prototype ? prototype.clone() : undefined;
  }
}
