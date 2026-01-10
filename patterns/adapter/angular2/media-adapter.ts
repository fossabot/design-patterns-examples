// Target interface
export interface MediaPlayer {
  play(audioType: string, fileName: string): string;
}

// Adaptee classes
export class Mp3Player {
  playMp3(fileName: string): string {
    return `Playing MP3 file: ${fileName}`;
  }
}

export class VlcPlayer {
  playVlc(fileName: string): string {
    return `Playing VLC file: ${fileName}`;
  }
}

export class Mp4Player {
  playMp4(fileName: string): string {
    return `Playing MP4 file: ${fileName}`;
  }
}

// Adapter
export class MediaAdapter implements MediaPlayer {
  constructor(private audioType: string) {}

  play(audioType: string, fileName: string): string {
    if (audioType.toLowerCase() === 'vlc') {
      const vlcPlayer = new VlcPlayer();
      return vlcPlayer.playVlc(fileName);
    } else if (audioType.toLowerCase() === 'mp4') {
      const mp4Player = new Mp4Player();
      return mp4Player.playMp4(fileName);
    }
    return `Invalid media type: ${audioType}`;
  }
}

// Main player that uses adapter
export class AudioPlayer implements MediaPlayer {
  play(audioType: string, fileName: string): string {
    if (audioType.toLowerCase() === 'mp3') {
      const mp3Player = new Mp3Player();
      return mp3Player.playMp3(fileName);
    } else if (audioType.toLowerCase() === 'vlc' || audioType.toLowerCase() === 'mp4') {
      const mediaAdapter = new MediaAdapter(audioType);
      return mediaAdapter.play(audioType, fileName);
    }
    return `Invalid media type: ${audioType}`;
  }
}
