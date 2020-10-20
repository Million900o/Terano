const { Monitor, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Monitor {

    constructor(...args) {
        super(...args, {
            ignoreOthers: false,
        });
    }

    async run(message) {
        if (this.client.userSettingsCreated.includes(message.author.id)) return;
        this.client.userSettingsCreated.push(message.author.id);
        if (await this.client.providers.default.has('userSettings', message.author.id)) return;
        return await this.client.providers.default.create('userSettings', message.author.id, await this.CreateUserSettings());
    }

    async init() {
        this.client.userSettingsCreated = [];
        return;
    }

    async CreateUserSettings() {
        let dataObj = {
            tag: undefined,
            pfp: undefined,
            color: undefined,
            custom: {}
        };
        return dataObj;
    }

};