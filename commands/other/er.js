const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            // usage: '<color|tag> <value>'
            runIn: ['text', 'dm'],
            bucket: 2,
            cooldown: 69,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        message.sendMessage("Aww man!").catch(e => {
            throw e
        })
    }

};