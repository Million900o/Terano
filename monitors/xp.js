const { Monitor, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Monitor {

	constructor(...args) {
		super(...args, {
			ignoreOthers: false,
		});
	}

	async run(message) {
		if (await this.client.providers.default.has('level', `${message.author.id}-${message.guild.id}`)) return await this.addXP(message)
		else await this.client.providers.default.create('level', `${message.author.id}-${message.guild.id}`, await this.createXPData())
		return await this.addXP(message)
	}

	async addXP(message) {
		let userID = message.author.id
		let guildID = message.guild.id

		let timeoutData = this.client.xpTimeout[guildID + userID]
		let userData = await this.client.providers.default.get('level', `${userID}-${guildID}`)
		if (!userData) throw new Error('fuck')

		if (!timeoutData) this.client.xpTimeout[guildID + userID] = Date.now()
		else if (timeoutData > Date.now() - 20 * 1000) return

		let xp = userData.xp
		let newXP = xp + Math.floor(Math.random() * 8) + 8

		let level = userData.level
		let xpToLevel = 100 + 5 / 6 * level * (2 * level * level + 27 * level + 91);

		let newLevel
		if (newXP > xpToLevel) {
			newLevel = level + 1
			newXP = xp
			this.sendLevelUp(message, newLevel)
		} else newLevel = level

		await this.client.providers.default.update('level', `${userID}-${guildID}`, { level: newLevel, xp: newXP })
		return true
	}

	async sendLevelUp(message, level) {
		let guildSettings = await this.client.providers.default.get('guildSettings', message.guild.id)
		if (!guildSettings || !guildSettings.levelMessage) return
		let LUEmbed = new MessageEmbed().setAuthor(message.language.get("XP_LEVEL_UP", message.author.tag, level), message.author.avatarURL())
		return message.channel.send(LUEmbed)
	}

	async createXPData() {
		let dataObj = {
			xp: 0,
			level: 0,
			card: {
				picture: null,
				tag: "Example Tag",
				color: '#ff00ff',
			},
		}
		return dataObj;
	}

	async init() {
		this.client.xpTimeout = {}
		return
	}
};