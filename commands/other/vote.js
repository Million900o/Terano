const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_VOTE_DESCRIPTION'),
            // usage: '<color|tag> <value>'
            runIn: ['text', 'dm'],
            bucket: 4,
            cooldown: 20,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        let inviteEmbed = new MessageEmbed()
            .setAuthor(this.client.user.tag, this.client.user.avatarURL())
            .setDescription(`[Vote for me here!](https://terano.dev/terano)`)
            .setColor('#000000')
            .setFooter(`${message.language.get('COMMAND_VOTE_NAME')} | Developed By MILLION#1321`)
        message.sendMessage(inviteEmbed).catch(e => {
            message.sendMessage(e)
        })
    }

};