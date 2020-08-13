const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    run(message, command, args) {
        this.client.settings.update('stats.commandsRun', this.client.settings.stats.commandsRun + 1)
    }

    init() {
        if (!this.client.options.saveStats) this.disable()
    }
};