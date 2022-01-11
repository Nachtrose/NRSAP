Hooks.once('ready', async function () {

var moduleVersion = game.modules.get("NRSAP").data.version;

    if (game.user.isGM) {
        if (game.settings.get("NRSAP", "lastVer") != moduleVersion ) {
            let d = new Dialog({
                title: "Update warning!",
                content: `<div style="text-align: justify;"><h2>Welcome to Nachtroses's Sci-Fi ( and modern ) Animated Pack</h2><p>There is currently a bug in the core Foundry code ( FVTT V9.242 ), that makes the audio keep playing after the travel sequence.</p><p>This applies to the scenes, that reload during travel, namely <b>Sequencer-Hyperspace</b> and <b>Drift-Travel-Scene</b></p><p>Only fix so far is to reload the scene again.</p><p>A workaround is to use the <i>Drift-travel-with-tiles</i> scene setup and macro, as it doesn't reload and therefore doesn't have this issue. Just change the used assets accordingly to your liking.</p><p>You can follow this issue on Foundry's <a href="https://gitlab.com/foundrynet/foundryvtt/-/issues/6511">GitLab page</a>.</p>`,
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

            });
            d.render(true);
        }
    }
})