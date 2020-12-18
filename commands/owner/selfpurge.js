const { Command, Stopwatch } = require('klasa');
const { MessageEmbed, Collection } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_SAY_DESCRIPTION'),
            runIn: ['text', 'dm'],
            deletable: true,
            aliases: [],
            permissionLevel: 10,
            extendedHelp: 'No extended help available.',
            // usage: '<user>'
        });
    }

    async run(message) {
        let messages = await message.channel.messages.fetch()
        for (let msg of messages.filter(m => m.author.id == this.client.user.id).last(5)) await msg.delete()
        let purgeEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(message.language.get('COMMAND_SELFPURGE', Messages.size))
            .setColor(message.member.displayHexColor)
            .setFooter(`${message.language.get('COMMAND_SELFPURGE_NAME')} | Developed By MILLION#1321`)
            .setTimestamp()
        return message.sendMessage(purgeEmbed)
    }

};
