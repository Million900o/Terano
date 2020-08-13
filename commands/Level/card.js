const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_CARD_DESCRIPTION'),
            // usage: '<color|tag> <value>'
            runIn: ['text', 'dm'],
            bucket: 3,
            cooldown: 5,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        if (!message.args[0]) {
            let noSubCommandEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_CARD_NO_SUBCOMMAND'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noSubCommandEmbed)
        }

        let args = message.args[0].split(' ')
        if (['color', 'tag'].includes(args[0]))
            return await this[args[0]](message, args.slice(1));
        else {
            let noSubCommandEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_CARD_NO_SUBCOMMAND'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noSubCommandEmbed)
        }
    }

    async color(message, args) {
        let newColor = args.join(' ')
        if (!newColor) {
            let noNewColorEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_CARD_COLOR_NONE'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noNewColorEmbed)
        }
        if (!newColor.startsWith("#")) newColor = `#${newColor}`;

        if (/^#[0-9A-F]{6}$/i.test(`${newColor}`)) {
            await this.client.providers.default.update('userSettings', message.author.id, { color: newColor })
            let colorUpdateEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setColor(newColor)
                .setDescription(message.language.get('COMMAND_CARD_COLOR_UPDATED', newColor))
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')} | Developed By MILLION#1321`)
                .setTimestamp();
            return message.sendMessage(colorUpdateEmbed)
        } else {
            let colorNotHexEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setColor("ff0000")
                .setDescription(message.language.get('COMMAND_CARD_COLOR_NOTHEX', newColor))
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')} | Developed By MILLION#1321`)
                .setTimestamp();
            return message.sendMessage(colorNotHexEmbed)
        }

    }

    async tag(message, args) {
        let newTag = args.join(' ')
        if (!newTag) {
            let noNewTagEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_CARD_TAG_NONE'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noNewTagEmbed)
        }
        if (newTag.length > 25) {
            let updatedEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_CARD_TAG_LONG', newTag))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_CARD_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(updatedEmbed)
        }
        await this.client.providers.default.update('userSettings', message.author.id, { tag: newTag })
        let updatedEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(message.language.get('COMMAND_CARD_TAG_UPDATED', newTag))
            .setColor(message.member.displayHexColor)
            .setFooter(`${message.language.get('COMMAND_CARD_NAME')} | Developed By MILLION#1321`)
            .setTimestamp()
        return message.sendMessage(updatedEmbed)
    }
};