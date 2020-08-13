const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_INVITE_DESCRIPTION'),
            runIn: ['text', 'dm'],
            bucket: 2,
            cooldown: 5,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        let inviteEmbed = new MessageEmbed()
            .setAuthor(this.client.user.tag, this.client.user.avatarURL())
            .setDescription(`[${message.language.get('COMMAND_INVITE_TXT')}](https://terano.dev/teranoinv)`)
            .setColor('#000000')
            .setFooter(`${message.language.get('COMMAND_INVITE_NAME')} | Developed By MILLION#1321`)
        message.sendMessage(inviteEmbed).catch(e => {
            message.sendMessage(e)
        })
    }

};