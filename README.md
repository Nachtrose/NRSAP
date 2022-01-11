# Nachtrose's Sci-Fi ( and modern ) Animated Pack / NRSAP for short

## Hottest news

After a talk with the great Sequencer guy, Adam Oresten, i was offered the possibility to host his Hyperspeed assets in my module, main reason being, that it will cut on the size of his code oriented module. And it greatly fits here.

### **A big "Thank you Adam!"**

## About

This module has been inspired into existence by Jules & Ben's Animated attacks ( [ JB2A ](https://github.com/Jules-Bens-Aa/JB2A_DnD5e) ) which it means to compliment in fields, that aren't J&B's focus, sci-fi and modern assets.
By a fickle twists of fate i managed in the end finish my take on FTL style travel earlier than any of the attack animations i was aiming for and as people seemed to be interested in these assets, i decided to start this module with just that. To make the setup a little easier, i have ~~stolen~~ borrowed the Hyperspace macro from Adam Oresten's [Sequencer](https://github.com/fantasycalendar/FoundryVTT-Sequencer) module.
I also want to thank **wildj79** and **Deepflame** and all the other contributors for their great work on the Starfinder system module which is the number one reason i am making this module at all.

![Drift_demo](/images/drift_travel_demo.gif)

( scene created using functionality of the Sequencer module. Space background images, cockpit overlay and destination picking are all parts of the Sequencer module used to demonstrate a whole FTL sequence using both modules)

## Dependencies

This module is system and language agnostic and the assets included have no dependencies themself.
However, if you do not wan't everything to set up manually, this module will bundle some example macros, that might require other modules to work properly. This list might grow in the future.

 #### Conditional dependencies

   [Sequencer](https://github.com/fantasycalendar/FoundryVTT-Sequencer) by Adam Oresten
   
## Licenses

Until specified otherwise, the assets and code of this module are licensed under CC-BY-SA-NC 4.0 and MIT License respectively, © 2021 Marian Kuba. More details can be found in the [Licenses](https://github.com/Nachtrose/NRSAP/tree/main/licenses) section.

**Exception**

Even if this module is licensed under the Non-Commercial license, you are allowed in your streams, videos or simillar ( YouTube, Twitch, etc...) that generates you revenue as long as you adhere to the following rules:

Your project must be free. You’re free to use NRSAP in your project provided that your project is accessible by everyone for free.
Free doesn’t just mean free from payment, it also means free from hassle. You can’t require survey completions, gate access behind downloads of unrelated products, require opting in to email lists (unless the entirety of your project is only available in email form), or other unnecessary annoyances as a requirement to access your project. You can’t lock your content behind a paywall of any sort.
You are allowed to accept donations on platforms like Patreon and to generate advertising revenue via YouTube, Twitch, and web ads.
You are allowed to have paid sponsorship of your content as long as that sponsor is clearly identified to your audience.

*NOTE: Some parts of this module may be licensed undes other licenses. But for example Paizo's license is very simillar*

This module also uses trademarks and/or copyrights owned by Paizo Inc., used under Paizo's Community Use Policy [paizo.com/communityuse](https://www.paizo.com/communityuse). We are expressly prohibited from charging you to use or access this content. This module is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit [paizo.com](https://www.paizo.com).

## Support

This module is in it's **_very_** early stage of development, but should you feel the urge to support this module, you can tip me here:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J45HWX3)

All tips are deeply appreciated.

## Credits

### Hyperspeed Scene
- Hyperdrive Animations - Copyright © 2020 Adam Oresten
- Sounds [HellScape Tabletop Assets](https://www.patreon.com/HellScapeAssets) - Copyright © 2020 AurelTristen
- Sci-fi Cockpits - Copyright © 2020 Vattalus Assets
- Stellaris Animated Backgrounds - Copyright © 2021 Paradox Interactive

### The small things by scale, but big by impact
- most of the macros used here were straight up created by Wasp the sequencer guy, without him, this module would be a pale shadow of itself
- tile-based backround and the acompanying macro was the idea of Bruno Calado ([#2](https://github.com/Nachtrose/NRSAP/issues/2)) and slightly remade again by Wasp

## To-do List

- [x] add own audio to the drift travel animations 
- [ ] start adding attack animations
- [ ] add more attack animations
- [ ] look into creating non-weapon based effect, spells etc.


## Changelog

This part includes only the lates changes. You can find the complete changelog [here](CHANGELOG.md)

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
- changed all underscores ` _ ` in names to dashes ` - ` for the sake of naming consistency
- changed uppercase "D" in drift animation names to lowercase "d"
- added mp4 version of in-travel loops ( #1 )
