// Target interface
interface MediaPlayer {
    String play(String filename);
}

// Adaptee (old interface)
interface AdvancedMediaPlayer {
    String playVLC(String filename);
    String playMP4(String filename);
}

// Concrete Adaptee: VLC Player
class VLCPlayer implements AdvancedMediaPlayer {
    @Override
    public String playVLC(String filename) {
        return "Playing VLC file: " + filename;
    }

    @Override
    public String playMP4(String filename) {
        return "";
    }
}

// Concrete Adaptee: MP4 Player
class MP4Player implements AdvancedMediaPlayer {
    @Override
    public String playVLC(String filename) {
        return "";
    }

    @Override
    public String playMP4(String filename) {
        return "Playing MP4 file: " + filename;
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private AdvancedMediaPlayer advancedPlayer;

    public MediaAdapter(String audioType) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedPlayer = new VLCPlayer();
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedPlayer = new MP4Player();
        }
    }

    @Override
    public String play(String filename) {
        if (advancedPlayer instanceof VLCPlayer) {
            return advancedPlayer.playVLC(filename);
        } else if (advancedPlayer instanceof MP4Player) {
            return advancedPlayer.playMP4(filename);
        }
        return "";
    }
}

// Concrete implementation using adapter
class AudioPlayer implements MediaPlayer {
    @Override
    public String play(String filename) {
        return "Playing MP3 file: " + filename;
    }

    public String play(String audioType, String filename) {
        if (audioType.equalsIgnoreCase("mp3")) {
            return "Playing MP3 file: " + filename;
        } else if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
            MediaAdapter adapter = new MediaAdapter(audioType);
            return adapter.play(filename);
        }
        return "Invalid media type: " + audioType;
    }
}

// Main class demonstrating Adapter pattern
public class Adapter {
    public static void main(String[] args) {
        AudioPlayer player = new AudioPlayer();
        System.out.println(player.play("mp3", "song.mp3"));
        System.out.println(player.play("vlc", "movie.vlc"));
        System.out.println(player.play("mp4", "video.mp4"));
    }
}
