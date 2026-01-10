// Prototype interface
interface IPrototype {
  clone(): IPrototype;
  getInfo(): string;
}

// Concrete Prototype
class Document implements IPrototype {
  constructor(private title: string, private content: string) {}

  clone(): IPrototype {
    return new Document(this.title, this.content);
  }

  getInfo(): string {
    return `Document: ${this.title} - ${this.content}`;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setContent(content: string): void {
    this.content = content;
  }
}

// Usage
const original = new Document('Original Document', 'This is the original content');
console.log(original.getInfo());

const clone = original.clone() as Document;
clone.setTitle('Cloned Document');
clone.setContent('This is the cloned content');
console.log(clone.getInfo());

console.log('Original after cloning:', original.getInfo());
