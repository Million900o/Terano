const { Inhibitor } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Inhibitor {

	run(message, command) {
		if (!command.runIn.length) {
			let runInEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get(`INHIBITOR_RUNIN_NONE`, command.name))
				.setColor("#ff0000")
				.setFooter(`${message.language.get('INHIBITOR_RUNIN')}  | Developed By MILLION#1321`)
				.setTimestamp();
			return message.sendMessage(runInEmbed);
		}
		if (!command.runIn.includes(message.channel.type)) {
			let runInEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get('INHIBITOR_RUNIN_CHANNELS', command.runIn.join(', ')))
				.setColor("#ff0000")
				.setFooter(`${message.language.get('INHIBITOR_RUNIN')}  | Developed By MILLION#1321`)
				.setTimestamp();
			return message.sendMessage(runInEmbed);
		}
	}

};
