import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFlyweightFactory, Character } from './character-flyweight';

@Component({
  selector: 'app-flyweight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flyweight.component.html',
  styleUrls: ['./flyweight.component.css']
})
export class FlyweightComponent {
  factory: CharacterFlyweightFactory;
  characters: Character[] = [];

  constructor() {
    this.factory = new CharacterFlyweightFactory();
  }

  addText(text: string, font: string, size: number, color: string): void {
    const style = this.factory.getStyle(font, size, color);
    for (const char of text) {
      this.characters.push(new Character(char, style));
    }
  }

  getStyleCount(): number {
    return this.factory.getStyleCount();
  }
}
