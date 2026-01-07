import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteControl, Light, LightOnCommand, LightOffCommand } from './remote-command';

@Component({
  selector: 'app-command',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  remote: RemoteControl;
  light: Light;
  commandHistory: string[] = [];

  constructor() {
    this.remote = new RemoteControl();
    this.light = new Light();
  }

  turnOnLight(): void {
    const command = new LightOnCommand(this.light);
    const result = this.remote.executeCommand(command);
    this.commandHistory.push(result);
  }

  turnOffLight(): void {
    const command = new LightOffCommand(this.light);
    const result = this.remote.executeCommand(command);
    this.commandHistory.push(result);
  }

  undoCommand(): void {
    const result = this.remote.undo();
    this.commandHistory.push(`Undo: ${result}`);
  }
}
