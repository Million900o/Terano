const { Command } = require('klasa');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require('canvas')

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            usage: '[targetUser:user]',
            description: language => language.get('COMMAND_RANK_DESCRIPTION'),
            runIn: ['text', 'dm'],
            bucket: 1,
            cooldown: 6,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message, params) {
        let user;
        if (params[0]) user = params[0]
        else user = message.author

        let userID = user.id
        let guildID = message.guild.id

        let allLevelData = await this.client.providers.default.getAll('level')
        let levelData = allLevelData.find(c => c.id == `${userID}-${guildID}`)
        let guildLevelData = allLevelData.filter(c => c.id.split('-')[1] == message.guild.id)
        let guildLevelDataSorted = guildLevelData.sort((a, b) => b.xp - a.xp)

        let rank = guildLevelDataSorted.indexOf(levelData) + 1

        if (!levelData) {
            let noDataEmbed = new MessageEmbed()
                .setAuthor(user.tag, user.avatarURL())
                .setTitle(message.language.get('COMMAND_RANK_NO_DATA'))
                .setColor(user.settings.color || message.member.displayHexColor)
                .setFooter('Rank')
                .setTimestamp()
            return message.sendMessage(noDataEmbed)
        }

        let userSettings = await this.client.providers.default.get('userSettings', user.id)
        if (!userSettings) {
            let noDataEmbed = new MessageEmbed()
                .setAuthor(user.tag, user.avatarURL())
                .setTitle(message.language.get('COMMAND_RANK_NO_SETTINGS'))
                .setColor(user.settings.color || message.member.displayHexColor)
                .setFooter('Rank')
                .setTimestamp()
            return message.sendMessage(noDataEmbed)
        }

        let currLevel = levelData.level
        let currXp = Math.floor(levelData.xp)

        let nextLevel = currLevel + 1
        let nextXp = Math.floor(100 + 5 / 6 * currLevel * (2 * currLevel * currLevel + 27 * currLevel + 91))

        let tag = userSettings.tag || "─────────────────"
        let pfp = userSettings.picture || user.avatarURL({ format: 'png' })
        let color = userSettings.color || message.member.displayHexColor

        let canvas = Canvas.createCanvas(850, 250)
        let ctx = canvas.getContext('2d')

        ctx.fillStyle = '#23272A';
        ctx.fillRect(0, 0, 850, 250);

        ctx.lineWidth = 45;
        ctx.strokeStyle = '#2C2F33';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        ctx.font = '26px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Level: ${currLevel}   Exp: ${currXp} / ${nextXp}   Rank: #${rank}`, 275, canvas.height / 2);

        ctx.font = 'normal 32px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${user.tag}`, 275, canvas.height / 3.5);

        ctx.font = 'bold 32px sans-serif';
        ctx.fillStyle = color;
        ctx.fillText(tag, 275, canvas.height / 1.35);

        let percentage = Math.floor(currXp / nextXp * 100) / 100
        let twoPI = 2 * Math.PI;
        let pointFivePI = 0.5 * Math.PI;

        let arcLength = percentage * twoPI
        let totalLength = arcLength - pointFivePI;

        ctx.strokeStyle = '#2C2F33';
        ctx.lineWidth = '35'
        ctx.beginPath();
        ctx.arc(125, 125, 85, 1.5 * Math.PI, 1.51 * Math.PI, true);
        ctx.stroke();

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(125, 125, 86, 1.5 * Math.PI, totalLength, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(125, 125, 85, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        let avatar = await Canvas.loadImage(pfp);
        ctx.drawImage(avatar, 33, 32, 185, 185);

        let attachment = new MessageAttachment(canvas.toBuffer(), 'rankCard.png');
        return message.sendMessage(attachment).catch(e => this.client.emit("error", e))
    }

};