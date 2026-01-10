export interface Image {
  display(): string;
}

export class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading ${this.filename} from disk...`);
  }

  display(): string {
    return `Displaying ${this.filename}`;
  }
}

export class ProxyImage implements Image {
  private realImage?: RealImage;

  constructor(private filename: string) {}

  display(): string {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
      return `Loaded and displaying ${this.filename}`;
    }
    return this.realImage.display();
  }
}
