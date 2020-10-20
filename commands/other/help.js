const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_HELP_DESCRIPTION'),
            // usage: '[command]'
            runIn: ['text', 'dm'],
            bucket: 5,
            cooldown: 5,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        if (message.args[0]) {
            let command = this.client.commands.find(c => c.name == message.args[0]);
            if (!command) {
                let commandNotFoundEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setTitle(message.language.get('COMMAND_HELP_CMD_NOTFOUND', message.args[0]))
                    .setColor(message.member.displayHexColor)
                    .setFooter(`${message.language.get('COMMAND_HELP_NAME')} | Developed By MILLION#1321`)
                    .setTimestamp();
                return message.sendMessage(commandNotFoundEmbed);
            } else {
                let commandHelpEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setTitle(message.language.get('COMMAND_HELP_CMD_NOTFOUND', message.args[0]))
                    .setColor(message.member.displayHexColor)
                    .addField('Command Name', command.name, true)
                    .addField('Command Usage', command.usage, true)
                    .addField('Command Description', command.description(message.language), true)
                    .setFooter(`${message.language.get('COMMAND_HELP_NAME')} | Developed By MILLION#1321`)
                    .setTimestamp();
                return message.sendMessage(commandHelpEmbed);
            }
        }

        let owner = [];
        let music = [];
        let admin = [];
        let level = [];
        let roki = [];
        let other = [];
        this.client.commands.forEach(e => {
            let cat = e.fullCategory[e.fullCategory.length - 1];
            if (cat == 'owner') return owner.push(e.name);
            if (cat == 'music') return music.push(e.name);
            if (cat == 'admin') return admin.push(e.name);
            if (cat == 'Level') return level.push(e.name);
            if (cat == 'Roki') return roki.push(e.name);
            if (cat == 'other') return other.push(e.name);
        });

        let helpEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle('Help')
            .setColor('#7d65bf')
            .addField(message.language.get('COMMAND_HELP_CAT_MUSIC'), '```' + music.join(', ') + '```')
            .addField(message.language.get('COMMAND_HELP_CAT_MOD'), '```' + admin.join(', ') + '```')
            .addField(message.language.get('COMMAND_HELP_CAT_LEVEL'), '```' + level.join(', ') + '```')
            .addField(message.language.get('COMMAND_HELP_CAT_ROKI'), '```' + roki.join(', ') + '```')
            .addField(message.language.get('COMMAND_HELP_CAT_OTHER'), '```' + other.join(', ') + '```');
        return message.sendMessage(helpEmbed);
    }

};