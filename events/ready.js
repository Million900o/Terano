const { Event } = require('klasa');
const { MessageEmbed, WebhookClient } = require('discord.js');
const config = require('../config.json');
const DBL = require('../functions/DBL');

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    async run() {
        let readyWebHook = new WebhookClient(config.webhooks.ready.id, config.webhooks.ready.token)
        let readyEmbed = new MessageEmbed()
            .setTitle('Ready!')
            .setFooter('Developed By MILLION#1321')
            .setTimestamp()

        await DBL.Start(this.client, config.api.dbl, { port: 8008, auth: '0' })

        return readyWebHook.send(readyEmbed).catch(e => {
            throw new Error(e);
        })

    }
};