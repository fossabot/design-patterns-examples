import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentContext } from './document-state';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  document: DocumentContext;
  stateHistory: string[] = [];

  constructor() {
    this.document = new DocumentContext();
    this.stateHistory.push(`Document created in ${this.document.getState().getStateName()} state`);
  }

  reviewDocument(): void {
    const result = this.document.review();
    this.stateHistory.push(result);
  }

  publishDocument(): void {
    const result = this.document.publish();
    this.stateHistory.push(result);
  }

  getCurrentState(): string {
    return this.document.getState().getStateName();
  }
}
