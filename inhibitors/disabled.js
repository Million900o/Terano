const { Inhibitor } = require('klasa');
const { MessageMessageEmbed } = require('discord.js');

module.exports = class extends Inhibitor {

	run(message, command) {
		if (!command.enabled) {
			let disabledGlobalEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get(`INHIBITOR_DISABLED_GLOBAL`))
				.setColor("#ff0000")
				.setFooter(`${message.language.get('INHIBITOR_DISABLED')}  | Developed By MILLION#1321`)
				.setTimestamp();
			return message.sendMessage(disabledGlobalEmbed);
		}
		if (message.guildSettings.disabledCommands.includes(command.name)) {
			let disabledGuildEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get(`INHIBITOR_DISABLED_GUILD`))
				.setColor("#ff0000")
				.setFooter(`${message.language.get('INHIBITOR_DISABLED')}  | Developed By MILLION#1321`)
				.setTimestamp();
			return message.sendMessage(disabledGuildEmbed);
		} else return;
	}

};
