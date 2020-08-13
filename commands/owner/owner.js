const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_OWNER_DESCRIPTION'),
            runIn: ['text', 'dm'],
            deletable: true,
            aliases: [],
            permissionLevel: 9,
            extendedHelp: 'No extended help available.',
            // usage: '<user>'
        });
    }

    async run(message, params) {
        if (!message.author.settings.owner.active) {
            let noPermsEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('NO_BOT_PERMS'))
                .setColor('#ff0000')
                .setFooter(`${message.language.get('COMMAND_OWNER_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noPermsEmbed)
        }

        let args = message.args
        if (!args[0]) {
            let noUserEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_OWNER_NO_USER'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_OWNER_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noUserEmbed)
        }

        let user = await this.getMember(args[0], message)

        if (!user) {
            let noUserEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_OWNER_NO_USER'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_OWNER_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noUserEmbed)
        }

        if (user.id == message.author.id) {
            let userSelfEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_OWNER_USER_SELF'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_OWNER_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(userSelfEmbed)
        }
        let TF = user.settings.owner.active

        if (TF) {
            await user.settings.update({ 'owner.active': false, 'owner.givenBy': 'null' })
            let ownerUpdateEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_OWNER_UPDATED_FALSE', user.tag))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_OWNER_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(ownerUpdateEmbed)
        } else {
            await user.settings.update({ 'owner.active': true, 'owner.givenBy': message.author.tag })
            let ownerUpdateEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_OWNER_UPDATED_TRUE', user.tag))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_OWNER_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(ownerUpdateEmbed)
        }
    }

    async getMember(input, message) {
        if (input.startsWith('<@') && input.endsWith('>')) {
            input = input.slice(2, -1);
            if (input.startsWith('!')) input = input.slice(1);
            let member = await this.client.users.fetch(input);
            if (member) return member;
            else return false;
        } else {
            let member = await this.client.users.fetch(input);
            if (member) return member;
            else return false;
        }
    };

};
