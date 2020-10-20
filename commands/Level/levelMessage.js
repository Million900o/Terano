const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'levelMessage',
            aliases: ['lm', 'llm'],
            description: language => language.get('COMMAND_LM_DESCRIPTION'),
            // usage: '<color|tag> <value>'
            runIn: ['text', 'dm'],
            bucket: 3,
            cooldown: 5,
            deletable: true,
            permissionLevel: 4,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        let TF = (await message.guild.settings).levelMessage;

        if (TF) {
            await message.guild.settings.update("levelMessage", false);
            let lmEmbed = new MessageEmbed().setTitle(message.language.get('COMMAND_LM_FALSE'));
            return message.channel.sendMessage(lmEmbed);
        } else {
            await message.guild.settings.update("levelMessage", true);
            let lmEmbed = new MessageEmbed().setTitle(message.language.get('COMMAND_LM_TRUE'));
            return message.channel.sendMessage(lmEmbed);
        }
    }

};