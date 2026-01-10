// Subject interface
interface Image {
  display(): string;
}

// Real Subject
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  display(): string {
    return `Displaying image: ${this.filename}`;
  }
}

// Proxy
class ProxyImage implements Image {
  private filename: string;
  private realImage: RealImage | null = null;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): string {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    return this.realImage.display();
  }
}

// Usage
const image1 = new ProxyImage('photo1.jpg');
const image2 = new ProxyImage('photo2.jpg');

console.log('\nFirst display call:');
console.log(image1.display());

console.log('\nSecond display call (cached):');
console.log(image1.display());

console.log('\nDisplay another image:');
console.log(image2.display());
