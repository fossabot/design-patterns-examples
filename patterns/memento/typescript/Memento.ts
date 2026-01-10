// Memento
class Memento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

// Originator
class TextEditor {
  private content: string = '';

  setContent(content: string): void {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getContent();
  }
}

// Caretaker
class History {
  private mementos: Memento[] = [];

  push(memento: Memento): void {
    this.mementos.push(memento);
  }

  pop(): Memento | undefined {
    return this.mementos.pop();
  }
}

// Usage
const editor = new TextEditor();
const history = new History();

editor.setContent('Version 1');
history.push(editor.save());
console.log(`Current: ${editor.getContent()}`);

editor.setContent('Version 2');
history.push(editor.save());
console.log(`Current: ${editor.getContent()}`);

editor.setContent('Version 3');
console.log(`Current: ${editor.getContent()}`);

const memento1 = history.pop();
if (memento1) editor.restore(memento1);
console.log(`After undo: ${editor.getContent()}`);

const memento2 = history.pop();
if (memento2) editor.restore(memento2);
console.log(`After undo: ${editor.getContent()}`);
