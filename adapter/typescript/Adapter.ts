// Target interface
interface MediaPlayer {
  play(filename: string): string;
}

// Adaptee interface
interface AdvancedMediaPlayer {
  playVLC(filename: string): string;
  playMP4(filename: string): string;
}

// Concrete Adaptee
class VLCPlayer implements AdvancedMediaPlayer {
  playVLC(filename: string): string {
    return `Playing VLC file: ${filename}`;
  }

  playMP4(filename: string): string {
    return '';
  }
}

class MP4Player implements AdvancedMediaPlayer {
  playVLC(filename: string): string {
    return '';
  }

  playMP4(filename: string): string {
    return `Playing MP4 file: ${filename}`;
  }
}

// Adapter
class MediaAdapter implements MediaPlayer {
  private advancedPlayer: AdvancedMediaPlayer;

  constructor(audioType: string) {
    if (audioType === 'vlc') {
      this.advancedPlayer = new VLCPlayer();
    } else if (audioType === 'mp4') {
      this.advancedPlayer = new MP4Player();
    }
  }

  play(filename: string): string {
    if (this.advancedPlayer instanceof VLCPlayer) {
      return this.advancedPlayer.playVLC(filename);
    } else if (this.advancedPlayer instanceof MP4Player) {
      return this.advancedPlayer.playMP4(filename);
    }
    return '';
  }
}

// Concrete MediaPlayer using adapter
class AudioPlayer {
  play(audioType: string, filename: string): string {
    if (audioType === 'mp3') {
      return `Playing MP3 file: ${filename}`;
    } else if (audioType === 'vlc' || audioType === 'mp4') {
      const adapter = new MediaAdapter(audioType);
      return adapter.play(filename);
    }
    return `Invalid media type: ${audioType}`;
  }
}

// Usage
const player = new AudioPlayer();
console.log(player.play('mp3', 'song.mp3'));
console.log(player.play('vlc', 'movie.vlc'));
console.log(player.play('mp4', 'video.mp4'));
