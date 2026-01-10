<?php

// Target interface
interface MediaPlayer {
    public function play(string $filename): string;
}

// Adaptee interface
interface AdvancedMediaPlayer {
    public function playVLC(string $filename): string;
    public function playMP4(string $filename): string;
}

// Concrete Adaptee
class VLCPlayer implements AdvancedMediaPlayer {
    public function playVLC(string $filename): string {
        return "Playing VLC file: {$filename}";
    }

    public function playMP4(string $filename): string {
        return "";
    }
}

class MP4Player implements AdvancedMediaPlayer {
    public function playVLC(string $filename): string {
        return "";
    }

    public function playMP4(string $filename): string {
        return "Playing MP4 file: {$filename}";
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private $advancedPlayer;

    public function __construct(string $audioType) {
        if ($audioType === "vlc") {
            $this->advancedPlayer = new VLCPlayer();
        } elseif ($audioType === "mp4") {
            $this->advancedPlayer = new MP4Player();
        }
    }

    public function play(string $filename): string {
        if ($this->advancedPlayer instanceof VLCPlayer) {
            return $this->advancedPlayer->playVLC($filename);
        } elseif ($this->advancedPlayer instanceof MP4Player) {
            return $this->advancedPlayer->playMP4($filename);
        }
        return "";
    }
}

// Concrete MediaPlayer using adapter
class AudioPlayer {
    public function play(string $audioType, string $filename): string {
        if ($audioType === "mp3") {
            return "Playing MP3 file: {$filename}";
        } elseif ($audioType === "vlc" || $audioType === "mp4") {
            $adapter = new MediaAdapter($audioType);
            return $adapter->play($filename);
        }
        return "Invalid media type: {$audioType}";
    }
}

// Usage
$player = new AudioPlayer();
echo $player->play("mp3", "song.mp3") . "\n";
echo $player->play("vlc", "movie.vlc") . "\n";
echo $player->play("mp4", "video.mp4") . "\n";
