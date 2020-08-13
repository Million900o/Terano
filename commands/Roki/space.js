const config = require('../../config.json');

const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            cooldown: 2,
            bucket: 2,
            permissionLevel: 0,
            deletable: true,
            runIn: ["text", "dm"],
            description: language => language.get('COMMAND_SPACE_DESCRIPTION'),
        });
    }

    async run(message) {
        fetch(`http://roki.ovh:1234/sfw/space?key=${config.api.roki}`).then(res => {
            res.json().then(c => {
                let embed = new MessageEmbed().setImage(c.url).setColor(message.member.displayHexColor).setFooter('SmartAPI By Roki');
                message.sendMessage(embed);
            });
        });
    }

};