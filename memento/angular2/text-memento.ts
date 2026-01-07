export class Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state;
  }
}

export class TextEditor {
  private content = '';

  write(text: string): void {
    this.content += text;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }
}

export class History {
  private mementos: Memento[] = [];

  push(memento: Memento): void {
    this.mementos.push(memento);
  }

  pop(): Memento | undefined {
    return this.mementos.pop();
  }
}
