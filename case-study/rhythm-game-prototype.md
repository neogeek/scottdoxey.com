# Rhythm Game Prototype

> **Role:** Programmer

![](../../images/projects/rhythm-game-utilities/rhythm-game-utilities-demo.png)

## Summary

I've been fascinated with music games for ages. From my first time playing [Tap Tap Revenge](https://en.wikipedia.org/wiki/Tap_Tap_Revenge) on the original iPod Touch to the countless hours I've played either Guitar Hero or Rock Band with friends. Because of this fascination, it makes sense that I would find myself building a game with a rhythm component.

## Objectives

I had three main objectives for this project:

1. [Render notes](#render-notes) that move in sync with an audio file
1. [Capture input](#capture-input) from multiple device types
1. Code should run in [multiple game engines](#game-engine-support)

### 1. Render Notes

In order to render notes, a few things need to happen:

- Parse a file containing information about the song, including the notes
- Calculate the position of the notes in 2D or 3D space
- Sync the note position with the playback of an audio file

### 2. Capture Input

For the game to be playable, once the notes are rendered and the audio is playing, player input would need to be captured from the following devices:

- Keyboard/Mouse
- Controller
- MIDI Device
- Guitar Hero/Rock Band Guitar
- DDR Pads

### 3. Game Engine Support

And so that I wasn't limited to one game engine; I wanted the code to be as portable as possible. To do this, I first built the plugin in C++, then for engines like Unity or Godot (with dotnet), I wrote C# code for marshalling data back and forth to the existing C++ logic.

## Implementation

The current architecture for this project (Unity specifically) looks like this:

### Rendering Notes

<pre class="mermaid">
graph LR;
    file["song.chart"]

    file-->parseSectionsFromChartCpp

    subgraph cppLibrary ["C++ Library"]
        parseSectionsFromChartCpp["ParseSectionsFromChart()"]
        parseBpmFromChartSectionCpp["ParseBpmFromChartSection()"]
        parseNotesFromChartSectionCpp["ParseNotesFromChartSection()"]
        parseLyricsFromChartSectionCpp["ParseLyricsFromChartSection()"]

        calculateBeatBarsCpp["CalculateBeatBars()"]

        convertTickToPositionCpp["ConvertTickToPosition()"]
        isOnTheBeatCpp["IsOnTheBeat()"]

        parseSectionsFromChartCpp
        parseBpmFromChartSectionCpp
        parseNotesFromChartSectionCpp
        parseLyricsFromChartSectionCpp

        calculateBeatBarsCpp

        convertTickToPositionCpp
        isOnTheBeatCpp
    end

    subgraph csharpLibrary ["C# Plugin"]
        songParseFromFileCsharp["Song.ParseFromFile()"]

        calculateBeatBarsCsharp["CalculateBeatBars()"]

        convertTickToPositionCsharp["ConvertTickToPosition()"]
        isOnTheBeatCsharp["IsOnTheBeat()"]

        calculateBeatBarsCsharp

        convertTickToPositionCsharp
        isOnTheBeatCsharp
    end

    subgraph unityProject ["Unity Project"]
        renderNotesInScene["Render Notes in Scene"]
        renderBeatBarsInScene["Render Beat Bars in Scene"]
        renderTrackInScene["Render Track in Scene"]
    end

    parseSectionsFromChartCpp-->parseBpmFromChartSectionCpp
    parseSectionsFromChartCpp-->parseNotesFromChartSectionCpp
    parseSectionsFromChartCpp-->parseLyricsFromChartSectionCpp

    parseSectionsFromChartCpp-->songParseFromFileCsharp

    calculateBeatBarsCpp-->calculateBeatBarsCsharp
    convertTickToPositionCpp-->convertTickToPositionCsharp
    isOnTheBeatCpp-->isOnTheBeatCsharp

    songParseFromFileCsharp-->renderNotesInScene
    songParseFromFileCsharp-->renderBeatBarsInScene
    songParseFromFileCsharp-->renderTrackInScene
</pre>

### Rendering Audio Frequency

<pre class="mermaid">
graph LR;
    file["song.ogg"]

    file-->convertSamplesToWaveformCpp

    subgraph cppLibrary ["C++ Library"]
        convertSamplesToWaveformCpp["ConvertSamplesToWaveform()"]
    end

    subgraph csharpLibrary ["C# Plugin"]
        convertSamplesToWaveformCsharp["ConvertSamplesToWaveform()"]
    end

    subgraph unityProject ["Unity Project"]
        renderWaveformToTexture["Render Waveform to Texture"]
    end

    convertSamplesToWaveformCpp-->convertSamplesToWaveformCsharp
    convertSamplesToWaveformCsharp-->renderWaveformToTexture
</pre>

## Results

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WSMoc8Y1FOE?si=yG__n1fUNcQMQ2_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

1. https://github.com/neogeek/rhythm-game-utilities/
1. https://github.com/neogeek/tiny-midi

## Challenges and Solutions

## References

1. [Tap Tap Revenge](https://en.wikipedia.org/wiki/Tap_Tap_Revenge) - _Tap Tap Revenge (also known as Tap Tap Revenge Classic) was a music game created by Nate True, and developed and published by Tapulous for iOS in July 2008. It is the first game in Tapulous' Tap Tap series._
1. [Guitar Hero](https://en.wikipedia.org/wiki/Guitar_Hero) - _Guitar Hero is a series of music rhythm games first released in 2005, in which players use a guitar-shaped game controller to simulate playing primarily lead, bass, and rhythm guitar across numerous songs._
1. [Rock Band](https://en.wikipedia.org/wiki/Rock_Band) - _Rock Band is a series of rhythm games first released in 2007 and developed by Harmonix. Based on their previous development work from the Guitar Hero series [...]_
1. [Clone Hero](https://clonehero.net/) - _Clone Hero is a classic instrument based rhythm game for Windows, Mac, Linux, and Android. It's playable with any 5 or 6 fret guitar controller, any midi drum kit, any game controller and even your keyboard! Jam out with Drums, 5-fret Guitar, or 6-fret Guitar online or local!_
1. [Moonscraper](https://github.com/FireFox2000000/Moonscraper-Chart-Editor) - _Moonscraper Chart Editor is a song editor for Guitar Hero style rhythm games mainly intended to support the custom song creation for games such as Guitar Hero, Clone Hero and Rock Band._
1. [.chart File Format](https://github.com/TheNathannator/GuitarGame_ChartFormats/blob/main/doc/FileFormats/.chart/Core%20Infrastructure.md) - _.chart is a text-based custom chart format originating from the GH1/2 era, similar in form to .ini files. It was originally created as an intermediate format, meant to be converted for use in a game, but nowadays it is typically used directly._
