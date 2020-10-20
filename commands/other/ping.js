const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_PING_DESCRIPTION'),
            runIn: ['text', 'dm'],
            bucket: 200,
            cooldown: 5,
            deletable: false,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        let ping = this.client.ws.ping;
        let clientPingTime = Math.floor(ping * 100) / 100;

        let pingEmbed = new MessageEmbed()
            .setAuthor(this.client.user.tag, this.client.user.avatarURL())
            .setColor(0)
            .addField(message.language.get('COMMAND_PING_MSG'), `\`\`\`${message.language.get('COMMAND_PING_MS', '?')}\`\`\``)
            .addField(message.language.get('COMMAND_PING_WS'), `\`\`\`${message.language.get('COMMAND_PING_MS', '?')}\`\`\``)
            .addField(message.language.get('COMMAND_PING_DB'), `\`\`\`${message.language.get('COMMAND_PING_MS', '?')}\`\`\``)
            .setTimestamp()
            .setFooter(`Ping`);

        let m = await message.sendMessage(pingEmbed);

        let pingTime = (m.editedTimestamp || m.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp);

        let stopwa = new Stopwatch().start();
        await this.client.providers.default.get('guildSettings', message.guild.id);
        let dbPing = stopwa.stop();

        let xpingEmbed = new MessageEmbed()
            .setAuthor(this.client.user.tag, this.client.user.avatarURL())
            .setColor(0)
            .addField(message.language.get('COMMAND_PING_MSG'), `\`\`\`${pingTime}ms\`\`\``)
            .addField(message.language.get('COMMAND_PING_WS'), `\`\`\`${clientPingTime}ms\`\`\``)
            .addField(message.language.get('COMMAND_PING_DB'), `\`\`\`${dbPing}\`\`\``)
            .setTimestamp()
            .setFooter(`Ping`);
        await m.edit(xpingEmbed);
        await m.edit(xpingEmbed);
    }

};