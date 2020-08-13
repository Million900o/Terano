const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    run(message) {
        // message.channel.send('Pls don\'t mute me, ty');
    }
};