export abstract class SupportHandler {
  protected nextHandler?: SupportHandler;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(level: number, issue: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(level, issue);
    }
    return 'Issue could not be handled';
  }
}

export class Level1Support extends SupportHandler {
  handle(level: number, issue: string): string {
    if (level === 1) {
      return `Level 1 Support: Handled "${issue}"`;
    }
    return super.handle(level, issue);
  }
}

export class Level2Support extends SupportHandler {
  handle(level: number, issue: string): string {
    if (level === 2) {
      return `Level 2 Support: Handled "${issue}"`;
    }
    return super.handle(level, issue);
  }
}

export class Level3Support extends SupportHandler {
  handle(level: number, issue: string): string {
    if (level === 3) {
      return `Level 3 Support: Handled "${issue}"`;
    }
    return super.handle(level, issue);
  }
}
