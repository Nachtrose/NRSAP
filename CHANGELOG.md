# Changelog

### v0.1.3.9i
- updated compatibility for Foundry V9+

### v0.1.3i
- added custom audiofiles for drift travel
- updated the sample macros with new audio files

### v0.1.2i hotfix2
- added a macro, that allows you to change foreground image with a few clicks or hide/unhide it ([#4](https://github.com/Nachtrose/NRSAP/issues/4)) - thanks Wasp
- added an example scene and macro that uses a tile as a background image to avoid reloading of the whole scene ([#2](https://github.com/Nachtrose/NRSAP/issues/2)) - thanks Bruno Calado and Wasp
- renamed `cockpits` to `foregrounds`( again, sorry for the inconvenience )
- fixed references to foreground images in example scenes that didn't reflect the name changes from underscores to dashes
- fixed references to foreground images in example scenes to reflect the new folder name

### v0.1.1i hotfix
- fixed image references in example macros

### v0.1.0i
- inheritance release ( for obvious reasons )
- with express permission, ported over Hyperspeed assets that were previously included in the [Sequencer](https://github.com/fantasycalendar/FoundryVTT-Sequencer) module
  - hyperspeed entry, loop and exit animations
  - animated and static scene backgrounds
  - two cockpit overlays
  - the acompanying audio tracks
- changed the example scenes to reflect the new asset paths and naming
- changed the example macros to reflect the new asset paths and naming ( requires Sequencer module )
- included a scene for the original sequencer styled hypertravel into compendium
- included a macro for the original sequencer styled hypertravel into compendium ( requires Sequencer module )
- changed all underscores ( _ ) in names to dashes( - ) for the sake of naming consistency
- changed uppercase "D" in drift animation names to lowercase "d"
- added *.mp4 version of in-travel loops ( #1 )

### v0.0.0a - Ariocarpus
- initial release
- added animated assets for drift (FTL) travel
  - in travel seamless loop
  - entry and exit with glass shatter transition effect
  - entry and exit with hex shatter transition effect
- added compendium with example scene ( requires Sequencer module )
- added compendium with example macros ( requires Sequencer module )
