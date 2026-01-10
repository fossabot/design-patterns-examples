export class CharacterStyle {
  constructor(
    public font: string,
    public size: number,
    public color: string
  ) {}
}

export class CharacterFlyweightFactory {
  private styles: Map<string, CharacterStyle> = new Map();

  getStyle(font: string, size: number, color: string): CharacterStyle {
    const key = `${font}-${size}-${color}`;
    if (!this.styles.has(key)) {
      this.styles.set(key, new CharacterStyle(font, size, color));
    }
    return this.styles.get(key)!;
  }

  getStyleCount(): number {
    return this.styles.size;
  }
}

export class Character {
  constructor(
    public char: string,
    public style: CharacterStyle
  ) {}

  display(): string {
    return `'${this.char}' (${this.style.font}, ${this.style.size}pt, ${this.style.color})`;
  }
}
