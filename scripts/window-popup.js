Hooks.once('ready', async function () {

var moduleVersion = game.modules.get("NRSAP").data.version;

    if (game.user.isGM) {
        if (game.settings.get("NRSAP", "lastVer") != moduleVersion ) {
            let d = new Dialog({
                title: "Update warning!",
                content: `<div style="text-align: justify;"><h2>Welcome to Nachtroses's Sci-Fi ( and modern ) Animated Pack</h2><p><h3>Update 0.1.3.10i</h3><b>Bugfixes</b><br>
                - fixed a typo in Drift-travel-with-tiles scene setup that prevented the loading of one asset on case sensitive systems ( ie. Linux )<br>
                - Foundry made some changes to canvas and the Drift-travel-with-tiles macro didn't update the background tile.
                You can either pull an updated macro from the compendium, or change in your existing macro the line <code>coreBackground.update({ img: img });</code> to <code>coreBackground.document.update({ img: img });</code><br>
                <b>Changes</b><br>
                - created a new compendium called <b>NRSAP Space Travel</b> with macros for drift and hyperspace travel sequences.<br>
                - added the funcionality of "autoupdated macros" <a href="https://github.com/Nachtrose/NRSAP/issues/12">[#12]</a>. Anyone that uses the macros without any changes can pull the <i>( autoupdate )</i> macro from the compendium. This will call the proper macro directly from compendium and allows for fixes/changes in the macros without the user needing to take any actions. Until something drasticaly changes, you shouldn't even have to pull a new <i>( autoupdate )</i> macro with each new version. Anyone that edits their macros still should use the full macros.<br>
                - added the Hyperspace-with-tiles scene together with acompanying macros<br>- The NRSAP Sample Macros compendium is not used or maintained at the moment, <b>DO NOT</b> use the macros there as new macros. I'm keeping it here just a while longer before deleting.</p><p><h3>Known Issue</h3></p><p>There is currently still a bug in the core Foundry code ( FVTT V9.249 ), that makes the audio keep playing after the travel sequence.<br>This applies to scenes, that reload during travel, namely <b>Sequencer-Hyperspace</b> and <b>Drift-Travel-Scene</b>. Only fix so far is to reload the scene again.<br>A workaround is to use the <i>Drift-travel-with-tiles</i> or <i>Hyperspace-with-tiles</i> scene setup and macro, as it doesn't reload and therefore doesn't have this issue. You can follow this issue on Foundry's <a href="https://gitlab.com/foundrynet/foundryvtt/-/issues/6511">GitLab page</a>.</p>
                <p><h3>Support</h3></p><p>If you like this module and what i am doing, you can buy me a coffee<br> <a href='https://ko-fi.com/J3J45HWX3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a><br>
                If you encounter any problems or issues, you can report them on NRSAP's <a href="https://github.com/Nachtrose/NRSAP">GitHub page</a></p>`,
                buttons: {
                    one: {
                        icon: '<i class="fas fa-clipboard-list"></i>',
                        label: "OK",
                    },
                    two: {
                        icon: '<i class="fas fa-clipboard-check"></i>',
                        label: "Don't show again",
                        callback: () => game.settings.set("NRSAP", "lastVer", moduleVersion)
                    },
                },

            },{width:700});
            d.render(true);
        }
    }
})