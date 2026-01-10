// State interface
interface DocumentState {
  publish(doc: Document): string;
  review(doc: Document): string;
}

// Context
class Document {
  private state: DocumentState;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.state = new DraftState();
  }

  setState(state: DocumentState): void {
    this.state = state;
  }

  publish(): string {
    return this.state.publish(this);
  }

  review(): string {
    return this.state.review(this);
  }
}

// Concrete States
class DraftState implements DocumentState {
  publish(doc: Document): string {
    return 'Cannot publish from Draft. Please review first.';
  }

  review(doc: Document): string {
    doc.setState(new ReviewState());
    return 'Document moved to Review state';
  }
}

class ReviewState implements DocumentState {
  publish(doc: Document): string {
    doc.setState(new PublishedState());
    return 'Document published successfully';
  }

  review(doc: Document): string {
    return 'Document is already in Review state';
  }
}

class PublishedState implements DocumentState {
  publish(doc: Document): string {
    return 'Document is already published';
  }

  review(doc: Document): string {
    return 'Cannot review a published document';
  }
}

// Usage
const doc = new Document('Design Patterns Guide');

console.log('Initial state: Draft');
console.log(doc.publish());
console.log(doc.review());
console.log(doc.publish());
