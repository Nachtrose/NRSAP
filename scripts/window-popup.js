Hooks.once('ready', async function () {

    var moduleVersion = game.modules.get("NRSAP").data.version;

    if (game.user.isGM) {
        if (game.settings.get("NRSAP", "lastVer") != moduleVersion) {
            let d = new Dialog({
                title: "Foundry V10 compatible!",
                content: `<div style="text-align: justify;"><h2>Welcome to Nachtroses's Sci-Fi ( and modern ) Animated Pack</h2><p><h3>Update 0.1.3.11i</h3><b>Bugfixes</b><br>
                - updated NRSAP to work with Foundry VTT version 10+<br>
                - due to the changes in data structure for V10, the macros have been updated again. Anyone using the autoupdate version shoudn't be affected by this<br>
                <b>Changes</b><br>
                - scenes using tiles as background now identify these tiles via flags. This resolves a issue, where macro got stuck while using backgrounds outside of the main folder <a href="https://github.com/Nachtrose/NRSAP/issues/16">#16</a><br>
                - included scenes got updated with the flags already set up<br>
                - added macros for flagging and unflagging tiles as the tile for background images ( select tile, run macro ) - found in NRSAP Helper Macros compendium<br>
                <b>Deprecation</b><br>
                - in one of the next updates i will deprecate the support for scenes that change the scene background image, as it is just double of the same, but in my eyes inferior to the seamless setup using tiles</p>
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

            }, { width: 700 });
            d.render(true);
        }
    }
})