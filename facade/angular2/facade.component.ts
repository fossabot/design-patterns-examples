import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerFacade } from './computer-facade';

@Component({
  selector: 'app-facade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css']
})
export class FacadeComponent {
  computer: ComputerFacade;
  startupSteps: string[] = [];
  isStarted = false;

  constructor() {
    this.computer = new ComputerFacade();
  }

  startComputer(): void {
    this.startupSteps = this.computer.start();
    this.isStarted = true;
  }

  reset(): void {
    this.startupSteps = [];
    this.isStarted = false;
  }
}
