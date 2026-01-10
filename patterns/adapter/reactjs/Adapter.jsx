import React, { useState } from 'react';

// Adaptee classes
class VLCPlayer {
  playVLC(filename) {
    return `Playing VLC file: ${filename}`;
  }
}

class MP4Player {
  playMP4(filename) {
    return `Playing MP4 file: ${filename}`;
  }
}

// Adapter
class MediaAdapter {
  constructor(audioType) {
    if (audioType === 'vlc') {
      this.advancedPlayer = new VLCPlayer();
    } else if (audioType === 'mp4') {
      this.advancedPlayer = new MP4Player();
    }
  }

  play(filename) {
    if (this.advancedPlayer instanceof VLCPlayer) {
      return this.advancedPlayer.playVLC(filename);
    } else if (this.advancedPlayer instanceof MP4Player) {
      return this.advancedPlayer.playMP4(filename);
    }
  }
}

// Main player using adapter
class AudioPlayer {
  play(audioType, filename) {
    if (audioType === 'mp3') {
      return `Playing MP3 file: ${filename}`;
    } else if (audioType === 'vlc' || audioType === 'mp4') {
      const adapter = new MediaAdapter(audioType);
      return adapter.play(filename);
    }
    return `Invalid media type: ${audioType}`;
  }
}

// Component
const AdapterExample = () => {
  const [output, setOutput] = useState([]);
  const player = new AudioPlayer();

  const playFiles = () => {
    setOutput([
      player.play('mp3', 'song.mp3'),
      player.play('vlc', 'movie.vlc'),
      player.play('mp4', 'video.mp4'),
    ]);
  };

  return (
    <div className="adapter-example">
      <h2>Adapter Pattern</h2>
      <button onClick={playFiles}>Play Files</button>
      {output.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

export default AdapterExample;
