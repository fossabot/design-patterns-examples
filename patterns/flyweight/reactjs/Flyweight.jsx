import React, { useState } from 'react';

// Flyweight: Character formatting
class CharacterFormat {
  constructor(font, size, color) {
    this.font = font;
    this.size = size;
    this.color = color;
  }

  display(char) {
    return `Character '${char}' [Font: ${this.font}, Size: ${this.size}, Color: ${this.color}]`;
  }
}

// Flyweight Factory
class FormatFactory {
  constructor() {
    this.formats = new Map();
  }

  getFormat(font, size, color) {
    const key = `${font}-${size}-${color}`;
    if (!this.formats.has(key)) {
      console.log(`Created new format: ${key}`);
      this.formats.set(key, new CharacterFormat(font, size, color));
    }
    return this.formats.get(key);
  }

  getTotalFormats() {
    return this.formats.size;
  }
}

// Character with extrinsic state
class Character {
  constructor(char, format) {
    this.char = char;
    this.format = format;
  }

  display() {
    return this.format.display(this.char);
  }
}

// Text Editor
class TextEditor {
  constructor() {
    this.characters = [];
    this.factory = new FormatFactory();
  }

  addCharacter(char, font, size, color) {
    const format = this.factory.getFormat(font, size, color);
    this.characters.push(new Character(char, format));
  }

  display() {
    const results = this.characters.map(char => char.display());
    results.push(`Total unique formats: ${this.factory.getTotalFormats()}`);
    return results;
  }
}

// Component
const FlyweightExample = () => {
  const [output, setOutput] = useState([]);

  const runExample = () => {
    const editor = new TextEditor();
    editor.addCharacter('H', 'Arial', 12, 'Red');
    editor.addCharacter('e', 'Arial', 12, 'Red');
    editor.addCharacter('l', 'Arial', 12, 'Red');
    editor.addCharacter('l', 'Times', 14, 'Blue');
    editor.addCharacter('o', 'Times', 14, 'Blue');
    setOutput(editor.display());
  };

  return (
    <div className="flyweight-example">
      <h2>Flyweight Pattern</h2>
      <p>Text editor with shared character formatting</p>
      <button onClick={runExample}>Run Example</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default FlyweightExample;
