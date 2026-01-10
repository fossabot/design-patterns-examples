import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GUIFactoryService, Button, Checkbox } from './gui-factory.service';

interface UIElement {
  type: string;
  os: string;
  description: string;
}

@Component({
  selector: 'app-abstract-factory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abstract-factory.component.html',
  styleUrls: ['./abstract-factory.component.css']
})
export class AbstractFactoryComponent {
  uiElements: UIElement[] = [];

  constructor(private guiFactoryService: GUIFactoryService) {}

  createWindowsUI(): void {
    const factory = this.guiFactoryService.getFactory('windows');
    this.uiElements.push(factory.createButton());
    this.uiElements.push(factory.createCheckbox());
  }

  createMacUI(): void {
    const factory = this.guiFactoryService.getFactory('mac');
    this.uiElements.push(factory.createButton());
    this.uiElements.push(factory.createCheckbox());
  }
}
