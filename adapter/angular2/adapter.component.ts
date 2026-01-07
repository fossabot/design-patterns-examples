import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudioPlayer } from './media-adapter';

@Component({
  selector: 'app-adapter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent {
  audioPlayer: AudioPlayer;
  playResults: string[] = [];
  fileName = '';

  constructor() {
    this.audioPlayer = new AudioPlayer();
  }

  playMedia(audioType: string): void {
    if (this.fileName) {
      const result = this.audioPlayer.play(audioType, this.fileName);
      this.playResults.push(result);
    }
  }
}
