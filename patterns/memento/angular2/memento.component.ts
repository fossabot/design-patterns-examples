import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextEditor, History } from './text-memento';

@Component({
  selector: 'app-memento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent {
  editor: TextEditor;
  history: History;
  inputText = '';

  constructor() {
    this.editor = new TextEditor();
    this.history = new History();
  }

  write(): void {
    if (this.inputText) {
      this.editor.write(this.inputText + ' ');
      this.inputText = '';
    }
  }

  save(): void {
    this.history.push(this.editor.save());
  }

  undo(): void {
    const memento = this.history.pop();
    if (memento) {
      this.editor.restore(memento);
    }
  }

  getContent(): string {
    return this.editor.getContent();
  }
}
