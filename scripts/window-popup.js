Hooks.once('ready', async function () {

    if (game.user.isGM) {
        if (game.settings.get("NRSAP", "runonlyonce") == false) {
            let d = new Dialog({
                title: "Update warning!",
                content: `<div style="text-align: justify;"><h2>Welcome to Nachtroses's Sci-Fi ( and modern ) Animated Pack</h2><p>Due to merging-in some assets from the great Sequencer module, i changed some naming conventions for the sake of consistency.</p><p>This may cause some issues to anyone who was using this module already.</p><p>I'm deeply sorry for the inconvenience and going forward, i will strive to do similar module-wide changes as rare as possible. Ideally none.</p>`,
                buttons: {
                    one: {
                        icon: '<i class="fas fa-clipboard-list"></i>',
                        label: "OK",
                    },
                    two: {
                        icon: '<i class="fas fa-clipboard-check"></i>',
                        label: "Don't show again",
                        callback: () => game.settings.set("NRSAP", "runonlyonce", true)
                    },
                },

            });
            d.render(true);
        }
    }
})