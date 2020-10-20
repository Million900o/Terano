const { Command } = require('klasa');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_LB_DESCRIPTION'),
            // usage: '<color|tag> <value>'
            runIn: ['text'],
            bucket: 1,
            cooldown: 5,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        let allLevelData = await this.client.providers.default.getAll('level');
        let guildLevelData = allLevelData.filter(e => e.id.split('-')[1] == message.guild.id);
        let guildLevelDataSorted = guildLevelData.sort((a, b) => b.xp - a.xp);

        let lbEmbed = new MessageEmbed()
            .setTitle('Guild XP Leaderboard')
            .setColor(message.member.displayHexColor);

        let IMax;
        if (guildLevelDataSorted.length > 5) IMax = 5;
        else IMax = guildLevelDataSorted.length;

        for (let i = 0; i < IMax; i++) {
            let data = guildLevelDataSorted[i];
            let dataObj = {
                xp: data.xp,
                id: data.id.split('-')[0],
                level: data.level,
                rank: i + 1,
                tag: (await this.client.users.fetch(data.id.split('-')[0])).tag
            };
            console.log(dataObj);
            lbEmbed.addField(`**${dataObj.tag}:**`, `Level: \`${dataObj.level}\`  Rank: \`${dataObj.rank}\``);
        }
        lbEmbed.setFooter(`Developed By MILLION#1321`);

        return await message.sendMessage(lbEmbed).catch(e => this.client.emit("error", e));
    }

};