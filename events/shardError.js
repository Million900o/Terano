const { Event } = require('klasa');
const { MessageEmbed, WebhookClient } = require('discord.js');
const config = require('../config.json');

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    async run(err) {
        let errorWebHook = new WebhookClient(config.webhooks.shard.id, config.webhooks.shard.token);
        return errorWebHook.send('```js\n' + err + '```').catch(e => {
            throw new Error(e);
        });
    }

}; 