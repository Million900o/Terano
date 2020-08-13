const { Event } = require('klasa');
const { MessageEmbed, WebhookClient } = require('discord.js');
const config = require('../config.json')

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    async run(id) {
        let shardDCWebHook = new WebhookClient(config.webhooks.shard.id, config.webhooks.shard.token)
        return shardDCWebHook.send(`Shard ${id} Disconnected.`).catch(e => {
            throw new Error(e);
        })
    }

}; 