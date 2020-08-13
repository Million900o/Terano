const { Event } = require('klasa');
const { MessageEmbed, WebhookClient } = require('discord.js');
const config = require('../config.json')

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    async run(id) {
        let shardReadyWebHook = new WebhookClient(config.webhooks.shard.id, config.webhooks.shard.token)
        return shardReadyWebHook.send(`Shard ${id} is ready!`).catch(e => {
            throw new Error(e);
        })
    }

}; 