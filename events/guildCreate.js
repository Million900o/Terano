const { Event } = require('klasa');
const { MessageEmbed, WebhookClient } = require('discord.js');
const config = require('../config.json')

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    async run(guild) {
        let readyWebHook = new WebhookClient(config.webhooks.guildCreate.id, config.webhooks.guildCreate.token)
        let readyEmbed = new MessageEmbed()
            .setTitle('Joined a guild!')
            .setDescription(`${guild.name}`)
            .setFooter('Developed By MILLION#1321')
            .setTimestamp(1)
        return readyWebHook.send(readyEmbed).catch(e => {
            throw new Error(e);
        })
    }

}; 