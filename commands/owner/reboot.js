const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_REBOOT_DESCRIPTION'),
            runIn: ['text', 'dm'],
            deletable: true,
            aliases: [],
            permissionLevel: 10,
            extendedHelp: 'No extended help available.',
            // usage: '<user>'
        });
    }

    async run(message) {
        if (!message.author.settings.owner.active) {
            let noPermsEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('NO_BOT_PERMS'))
                .setColor('#ff0000')
                .setFooter(`${message.language.get('COMMAND_REBOOT_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noPermsEmbed)
        }

        let rebootEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(message.language.get('COMMAND_REBOOT_SUCC'))
            .setColor(message.member.displayHexColor)
            .setFooter(`${message.language.get('COMMAND_REBOOT_NAME')} | Developed By MILLION#1321`)
            .setTimestamp()
        await message.sendMessage(rebootEmbed)
        await Promise.all(this.client.providers.map(provider => provider.shutdown()));
        return process.exit();
    }
};
