const config = require('../../config.json');

const fetch = require('node-fetch');

const { MessageEmbed } = require('discord.js');
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_BIRB_DESCRIPTION'),
        });
    }

    async run(message) {
        fetch(`http://roki.ovh:1234/sfw/birb?key=${config.api.roki}`).then(res => {
            res.json().then(c => {
                let embed = new MessageEmbed().setImage(c.url).setColor(message.member.displayHexColor).setFooter('SmartAPI By Roki');
                if ('--no-embed' in message.flagArgs) return message.channel.send(new MessageAttachment(c.url, 'car.png'));
                else message.sendMessage(embed);
            });
        });
    }

};