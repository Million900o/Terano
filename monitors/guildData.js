const { Monitor, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Monitor {

    constructor(...args) {
        super(...args, {
            ignoreOthers: false,
        });
    }

    async run(message) {
        if (this.client.guildSettingsCreated.includes(message.guild.id)) return;
        this.client.guildSettingsCreated.push(message.guild.id);
        if (await this.client.providers.default.has('guildSettings', message.guild.id)) return;
        return await this.client.providers.default.create('guildSettings', message.guild.id, await this.CreateGuildSettings());
    }

    async init() {
        this.client.guildSettingsCreated = [];
        return;
    }

    async CreateGuildSettings() {
        let dataObj = {
            levelMessage: false,
            logs: {
                channel: null,
                active: []
            },
            level: {
                "0": "0"
            },
            defaultRoles: [],
            embed: true,
            noPerms: true
        };
        return dataObj;
    }

};