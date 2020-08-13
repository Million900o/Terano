const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_SAY_DESCRIPTION'),
            runIn: ['text', 'dm'],
            // deletable: true,
            aliases: [],
            permissionLevel: 10,
            extendedHelp: 'No extended help available.',
            // usage: '<user>'
        });
    }

    async run(message) {
        if (!message.author.settings.owner.active || !message.args[0]) return
        return message.sendMessage(message.args.join(' '))
    }

};
