const { Inhibitor } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Inhibitor {

	run(message, command) {
		if (command.nsfw && !message.channel.nsfw) {
			let NSFWEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get(`INHIBITOR_NSFW_CHANNEL`))
				.setColor("#ff0000")
				.setFooter(`${message.language.get('INHIBITOR_NSFW')}  | Developed By MILLION#1321`)
				.setTimestamp();
			return message.sendMessage(NSFWEmbed);
		} else return;
	}

};
