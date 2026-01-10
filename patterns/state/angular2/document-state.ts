// State interface
export interface DocumentState {
  publish(doc: DocumentContext): string;
  review(doc: DocumentContext): string;
  getStateName(): string;
}

// Context
export class DocumentContext {
  private state: DocumentState;

  constructor() {
    this.state = new DraftState();
  }

  setState(state: DocumentState): void {
    this.state = state;
  }

  getState(): DocumentState {
    return this.state;
  }

  publish(): string {
    return this.state.publish(this);
  }

  review(): string {
    return this.state.review(this);
  }
}

// Concrete States
export class DraftState implements DocumentState {
  getStateName(): string {
    return 'Draft';
  }

  publish(doc: DocumentContext): string {
    return 'Cannot publish a draft document. Please review it first.';
  }

  review(doc: DocumentContext): string {
    doc.setState(new ReviewState());
    return 'Document moved to Review state';
  }
}

export class ReviewState implements DocumentState {
  getStateName(): string {
    return 'Review';
  }

  publish(doc: DocumentContext): string {
    doc.setState(new PublishedState());
    return 'Document published successfully!';
  }

  review(doc: DocumentContext): string {
    return 'Document is already in Review state';
  }
}

export class PublishedState implements DocumentState {
  getStateName(): string {
    return 'Published';
  }

  publish(doc: DocumentContext): string {
    return 'Document is already published';
  }

  review(doc: DocumentContext): string {
    return 'Cannot review a published document';
  }
}
