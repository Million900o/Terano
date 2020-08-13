const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_BLACKLIST_DESCRIPTION'),
            runIn: ['text', 'dm'],
            deletable: true,
            aliases: [],
            permissionLevel: 9,
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

        let args = message.args
        if (!args[0]) {
            let noUserEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_BLACKLIST_NO_USER'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_BLACKLIST_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noUserEmbed)
        }

        let user = await this.getMember(args[0], message)
        if (!user) {
            let noUserEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_BLACKLIST_NO_USER'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_BLACKLIST_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noUserEmbed)
        }

        if (user.id == message.author.id) {
            let userSelfEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_BLACKLIST_USER_SELF'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_BLACKLIST_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(userSelfEmbed)
        }

        await this.client.settings.update('userBlacklist', user.id);
        let data = await this.client.settings.get('userBlacklist')
        let TF = data.includes(user.id)

        if (TF) {
            let blacklistUpdateEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_BLACKLIST_UPDATED_TRUE', user.user.tag))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_BLACKLIST_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(blacklistUpdateEmbed)
        } else {
            let blacklistUpdateEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_BLACKLIST_UPDATED_FALSE', user.user.tag))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_BLACKLIST_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(blacklistUpdateEmbed)
        }
    }

    async getMember(input, message) {
        if (input.startsWith('<@') && input.endsWith('>')) {
            input = input.slice(2, -1);
            if (input.startsWith('!')) input = input.slice(1);
            let member = await message.guild.members.fetch(input);
            if (member) return member;
            else return false;
        } else {
            let member = await message.guild.members.fetch(input);
            if (member) return member;
            else return false;
        }
    };

};
