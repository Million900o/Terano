const { Inhibitor } = require('klasa');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Inhibitor {

	async run(message, command) {
		const { broke, permission } = await this.client.permissionLevels.run(message, command.permissionLevel);
		if (!permission) throw broke ? this.sendEmbed(message) : true;
	}

	sendEmbed(message) {
		if (message.guild.settings.noPerms !== false) return true;
		let embed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.avatarURL())
			.setTitle(message.language.get(`INHIBITOR_PERMISSIONS_ACTIVE`))
			.setColor("#ff0000")
			.setFooter(`${message.language.get('INHIBITOR_PERMISSIONS')}  | Developed By MILLION#1321`)
			.setTimestamp()
		return message.sendMessage(embed)
	}

};
