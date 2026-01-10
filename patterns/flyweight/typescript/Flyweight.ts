// Flyweight: Character formatting
class CharacterFormat {
  private font: string;
  private size: number;
  private color: string;

  constructor(font: string, size: number, color: string) {
    this.font = font;
    this.size = size;
    this.color = color;
  }

  display(char: string): string {
    return `Character '${char}' [Font: ${this.font}, Size: ${this.size}, Color: ${this.color}]`;
  }
}

// Flyweight Factory
class FormatFactory {
  private formats: Map<string, CharacterFormat>;

  constructor() {
    this.formats = new Map();
  }

  getFormat(font: string, size: number, color: string): CharacterFormat {
    const key = `${font}-${size}-${color}`;
    if (!this.formats.has(key)) {
      console.log(`Created new format: ${key}`);
      this.formats.set(key, new CharacterFormat(font, size, color));
    }
    return this.formats.get(key)!;
  }

  getTotalFormats(): number {
    return this.formats.size;
  }
}

// Character with extrinsic state
class Character {
  private char: string;
  private format: CharacterFormat;

  constructor(char: string, format: CharacterFormat) {
    this.char = char;
    this.format = format;
  }

  display(): string {
    return this.format.display(this.char);
  }
}

// Text Editor
class TextEditor {
  private characters: Character[];
  private factory: FormatFactory;

  constructor() {
    this.characters = [];
    this.factory = new FormatFactory();
  }

  addCharacter(char: string, font: string, size: number, color: string): void {
    const format = this.factory.getFormat(font, size, color);
    this.characters.push(new Character(char, format));
  }

  display(): string[] {
    const results = this.characters.map(char => char.display());
    results.push(`Total unique formats: ${this.factory.getTotalFormats()}`);
    return results;
  }
}

// Usage
const editor = new TextEditor();
editor.addCharacter('H', 'Arial', 12, 'Red');
editor.addCharacter('e', 'Arial', 12, 'Red');
editor.addCharacter('l', 'Arial', 12, 'Red');
editor.addCharacter('l', 'Times', 14, 'Blue');
editor.addCharacter('o', 'Times', 14, 'Blue');

const results = editor.display();
results.forEach(result => console.log(result));
