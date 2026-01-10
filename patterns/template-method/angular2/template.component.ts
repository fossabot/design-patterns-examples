import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tea, Coffee } from './beverage-template';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  preparations: { type: string; steps: string[] }[] = [];

  prepareTea(): void {
    const tea = new Tea();
    this.preparations.push({ type: 'Tea', steps: tea.prepareBeverage() });
  }

  prepareCoffee(): void {
    const coffee = new Coffee();
    this.preparations.push({ type: 'Coffee', steps: coffee.prepareBeverage() });
  }
}
