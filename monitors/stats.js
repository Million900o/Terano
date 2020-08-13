const { Monitor, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Monitor {

    constructor(...args) {
        super(...args, {
            ignoreOthers: false,
        });
    }

    async run(message) {
        this.client.settings.update('stats.messages', this.client.settings.stats.messages + 1)
    }

    init() {
        if (!this.client.options.saveStats) this.disable()
    }

};