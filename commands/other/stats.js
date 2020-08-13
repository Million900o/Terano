const { MessageEmbed } = require('discord.js')
const OS = require('os')
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_STATS_DESCRIPTION'),
            // usage: '<color|tag> <value>'
            runIn: ['text', 'dm'],
            bucket: 2,
            cooldown: 4,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        let members = this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
        let channels = this.client.channels.cache.size;
        let guilds = this.client.guilds.cache.size;

        let ram = Math.floor(process.memoryUsage().rss / 1024 / 1024);
        let ramFree = Math.floor(OS.freemem() / 1024 / 1024 / 1024);
        let os = OS.platform();

        let cpuType = OS.cpus()[0].model.split(' ').splice('', 15).join(' ').split('  ').join('').split(' ,').join(',');
        let cpuSpeed = OS.cpus()[0].speed / 1000;

        let cpu = new Number(Math.round((await new Promise(async r => {
            let start = [process.hrtime(), process.cpuUsage()];

            await new Promise(r => setTimeout(() => r(), 100));

            let elap = [process.hrtime(start[0]), process.cpuUsage(start[1])];

            r(
                (100.0 * (elap[1].user / 1000 + elap[1].system / 1000)) /
                (elap[0][0] * 1000 + elap[0][1] / 1000000)
            );
        })) + "e2") + "e-2");

        let uptime = new Date(Math.floor(((process.uptime() * 100) / 100) * 1000))
            .toISOString()
            .substr(11, 8);
        let ping = Math.floor(this.client.ws.ping * 100) / 100;
        let version = require("../../package.json").version;

        let statsEmbed = new MessageEmbed()
            .setAuthor(this.client.user.tag, this.client.user.avatarURL())
            .setColor(0)
            .addField(
                `Bot Stats`,
                `\`\`\`coffeescript\nMembers: ${members},\nServers: ${guilds},\nChannels: ${channels}\`\`\``
            )
            .addField(
                `OS Stats`,
                `\`\`\`coffeescript\nRAM: ${ram}MB,\nRAM Free: ${ramFree}MB,\nOS: ${os},\nCPU: ${cpuType},\nCPU Speed: ${cpuSpeed},\nCPU Usage: ${cpu}%\`\`\``
            )
            .addField(
                `Client Stats`,
                `\`\`\`coffeescript\nUptime: ${uptime},\nWS Ping: ${ping}ms,\nVersion: ${version}\`\`\``
            )
            .addField(
                `Commands Stats`,
                `\`\`\`coffeescript\nCommands: ${this.client.settings.stats.commandsRun}, \nMessages: ${this.client.settings.stats.messages}\`\`\``
            )
            .setTimestamp()
            .setFooter(`Stats | Developed By MILLION#1321`);
        message.sendMessage(statsEmbed).catch();
    }

};