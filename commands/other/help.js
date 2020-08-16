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
            let command = this.client.commands.find(c => c.name == message.args[0])
            if (!command) {
                let commandNotFoundEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setTitle(message.language.get('COMMAND_HELP_CMD_NOTFOUND', message.args[0]))
                    .setColor(message.member.displayHexColor)
                    .setFooter(`${message.language.get('COMMAND_HELP_NAME')} | Developed By MILLION#1321`)
                    .setTimestamp()
                return message.sendMessage(commandNotFoundEmbed)
            } else {
                let commandHelpEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setTitle(message.language.get('COMMAND_HELP_CMD_NOTFOUND', message.args[0]))
                    .setColor(message.member.displayHexColor)
                    .addField('Command Name', command.name, true)
                    .addField('Command Usage', command.usage, true)
                    .addField('Command Description', command.description(message.language), true)
                    .setFooter(`${message.language.get('COMMAND_HELP_NAME')} | Developed By MILLION#1321`)
                    .setTimestamp()
                return message.sendMessage(commandHelpEmbed)
            }
        }

        let cmdCats = []
        this.client.commands.forEach(e => {
            let cat = e.fullCategory[e.fullCategory.length - 1]
            if (!cmdCats.includes(cat)) cmdCats.push(cat)
            else return
        })
        console.log(cmdCats)

        let helpEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle('Help')
            .setColor('#7d65bf')
            .addField(message.language.get('COMMAND_HELP_CAT_MUSIC'), '```play```')
            .addField(message.language.get('COMMAND_HELP_CAT_MOD'), '```prefix```')
            .addField(message.language.get('COMMAND_HELP_CAT_LEVEL'), '```card, levelMessage, leaderboard, rank```')
            .addField(message.language.get('COMMAND_HELP_CAT_ROKI'), '```birb, car, cat, dog, fox, koala, panda, redpanda, shibe, space```')
            .addField(message.language.get('COMMAND_HELP_CAT_OTHER'), '```ping, stats, help, vote, invite```')
        return message.sendMessage(helpEmbed)
    }

};