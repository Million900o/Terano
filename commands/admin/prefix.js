const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_PREFIX_DESCRIPTION'),
            runIn: ['text'],
            bucket: 2,
            cooldown: 10,
            deletable: true,
            aliases: [],
            permissionLevel: 6,
            extendedHelp: 'No extended help available.',
            // usage: '<prefix>'
        });
    }

    async run(message) {
        let newPrefix = message.args.join(' ')
        if (!newPrefix) {
            let prefixUpdatedEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_PREFIX_NO_ARGS'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_PREFIX_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(prefixUpdatedEmbed)
        }

        let { errors } = await message.guild.settings.update({ prefix: newPrefix }, message.guild);
        if (errors.length) throw new String(errors[0])

        let prefixUpdatedEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(message.language.get('COMMAND_PREFIX_UPDATED', newPrefix))
            .setColor(message.member.displayHexColor)
            .setFooter(`${message.language.get('COMMAND_PREFIX_NAME')}  | Developed By MILLION#1321`)
            .setTimestamp()
        return message.sendMessage(prefixUpdatedEmbed)
    }

};