# Adapter Pattern - Angular 2+

This example demonstrates the Adapter pattern in Angular 2+ using a media player that can play different file formats.

## Description

The Adapter pattern allows incompatible interfaces to work together. In this example, we have an `AudioPlayer` that natively plays MP3 files but can use adapters to play VLC and MP4 files through their specific players.

## Files

- `media-adapter.ts` - Adapter classes for different media formats
- `adapter.component.ts` - Component that uses the adapter
- `adapter.component.html` - Template for the component
- `adapter.component.css` - Styles for the component

## How It Works

1. `MediaPlayer` is the target interface
2. `Mp3Player`, `VlcPlayer`, `Mp4Player` are adaptees with different interfaces
3. `MediaAdapter` adapts VLC and MP4 players to the MediaPlayer interface
4. `AudioPlayer` uses the adapter to play different formats
