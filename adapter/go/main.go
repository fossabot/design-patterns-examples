package main

import "fmt"

// Target interface
type MediaPlayer interface {
	Play(filename string) string
}

// Adaptee (old interface)
type AdvancedMediaPlayer interface {
	PlayVLC(filename string) string
	PlayMP4(filename string) string
}

// Concrete Adaptee
type VLCPlayer struct{}

func (v *VLCPlayer) PlayVLC(filename string) string {
	return fmt.Sprintf("Playing VLC file: %s", filename)
}

func (v *VLCPlayer) PlayMP4(filename string) string {
	return ""
}

type MP4Player struct{}

func (m *MP4Player) PlayVLC(filename string) string {
	return ""
}

func (m *MP4Player) PlayMP4(filename string) string {
	return fmt.Sprintf("Playing MP4 file: %s", filename)
}

// Adapter
type MediaAdapter struct {
	advancedPlayer AdvancedMediaPlayer
}

func NewMediaAdapter(audioType string) *MediaAdapter {
	if audioType == "vlc" {
		return &MediaAdapter{advancedPlayer: &VLCPlayer{}}
	} else if audioType == "mp4" {
		return &MediaAdapter{advancedPlayer: &MP4Player{}}
	}
	return nil
}

func (m *MediaAdapter) Play(filename string) string {
	if vlc, ok := m.advancedPlayer.(*VLCPlayer); ok {
		return vlc.PlayVLC(filename)
	} else if mp4, ok := m.advancedPlayer.(*MP4Player); ok {
		return mp4.PlayMP4(filename)
	}
	return ""
}

// Concrete implementation using adapter
type AudioPlayer struct{}

func (a *AudioPlayer) Play(audioType, filename string) string {
	if audioType == "mp3" {
		return fmt.Sprintf("Playing MP3 file: %s", filename)
	} else if audioType == "vlc" || audioType == "mp4" {
		adapter := NewMediaAdapter(audioType)
		return adapter.Play(filename)
	}
	return fmt.Sprintf("Invalid media type: %s", audioType)
}

func main() {
	player := &AudioPlayer{}
	fmt.Println(player.Play("mp3", "song.mp3"))
	fmt.Println(player.Play("vlc", "movie.vlc"))
	fmt.Println(player.Play("mp4", "video.mp4"))
}
