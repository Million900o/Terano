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
            description: language => language.get('COMMAND_APOD_DESCRIPTION'),
        });
    }

    async run(message) {
        const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.api.nasa}`).then(res => res.json()).catch(error => { return; });
        if (!apod) {
            let noPermsEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('UNKNOWN_ERROR'))
                .setColor('#ff0000')
                .setFooter(`${message.language.get('COMMAND_APOD_NAME')} | Developed By MILLION#1321`)
                .setTimestamp();
            return message.sendMessage(noPermsEmbed);
        }

        const embed = new MessageEmbed()
            .setTitle(apod.title)
            .setColor(message.member.displayHexColor)
            .setFooter(message.language.get('COMMAND_APOD_NAME'));

        apod.media_type == "video" ? embed.setDescription(apod.url) : embed.setImage(apod.url);

        return message.sendMessage(embed);
    }

};