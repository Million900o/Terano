const { Command } = require('klasa');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require('canvas')

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
        let allLevelData = await this.client.providers.default.getAll('level')
        let guildLevelData = allLevelData.filter(e => e.id.split('-')[1] == message.guild.id)
        let guildLevelDataSorted = guildLevelData.sort((a, b) => b.xp - a.xp)

        let idArray = []
        let i;
        let lbEmbed = new MessageEmbed()
            .setTitle('Guild XP Leaderboard')
            .setColor(message.member.displayHexColor)
        let IMax;
        if (guildLevelDataSorted.size > 12) IMax = 12
        else IMax = 12

        for (i = 0; i < 12; i++) {
            let data = guildLevelDataSorted[i]
            let dataObj = {
                xp: data.xp,
                id: data.id.split('-')[0],
                level: data.level,
                rank: i + 1,
                tag: (await this.client.users.fetch(data.id.split('-')[0])).tag
            }
            lbEmbed.addField(`**${dataObj.tag}:**`, `Level: \`${dataObj.level}\`  Rank: \`${dataObj.rank}\``, true)
        }
        lbEmbed.setFooter(`Developed By MILLION#1321`)

        return await message.sendMessage(lbEmbed).catch(e => this.client.emit("error", e))
    }

};