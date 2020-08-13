const { Event } = require('klasa');
const { MessageEmbed, WebhookClient } = require('discord.js');
const config = require('../config.json')

module.exports = class extends Event {

    constructor(...args) {
        super(...args);
    }

    async run(guild) {
        let readyWebHook = new WebhookClient(config.webhooks.guildLeave.id, config.webhooks.guildLeave.token)
        let readyEmbed = new MessageEmbed()
            .setTitle('Left a guild!')
            .setDescription(`${guild.name}`)
            .setFooter('Developed By MILLION#1321')
            .setTimestamp(1)// https://cdn.discordapp.com/attachments/686689269296922682/733449175059923087/angery2.mp4
        return readyWebHook.send(readyEmbed).catch(e => {
            throw new Error(e);
        })
    }
}; 