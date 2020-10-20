const { Inhibitor } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Inhibitor {

	constructor(...args) {
		super(...args, { spamProtection: true });
	}

	run(message, command) {
		if (this.client.owners.has(message.author) || command.cooldown <= 0) return;

		let existing;

		try {
			existing = this.client.finalizers.get('commandCooldown').getCooldown(message, command);
		} catch (err) {
			return;
		}

		if (existing && existing.limited) {
			let cooldownEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get(`INHIBITOR_COOLDOWN_ACTIVE`, Math.ceil(existing.remainingTime / 1000), command.cooldownLevel !== 'author'))
				.setColor("#ff0000")
				.setFooter(`${message.language.get('INHIBITOR_COOLDOWN')}  | Developed By MILLION#1321`)
				.setTimestamp();
			return message.sendMessage(cooldownEmbed);
		} else return;
	}

};
