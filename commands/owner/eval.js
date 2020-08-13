const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');

const haste = require('hastebin-gen')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: language => language.get('COMMAND_EVAL_DESCRIPTION'),
			runIn: ['text', 'dm'],
			deletable: true,
			aliases: ['ev'],
			permissionLevel: 5,
			extendedHelp: 'No extended help available.',
			// usage: '<code>'
		});
	}

	async run(message) {
		let msg = message

		let code = msg.args.join(' ')
		let tokenCount = message.args.join(' ').split('token').length - 1
		for (let i = 0; i < tokenCount; i++) {
			code = code.replace(".token", ".ws.ping.toString()")
			code = code.replace("[\"rtoken\"]", "[\"ws\"]ping.toString()")
		}

		if (!code) {
			let noArgsEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get('COMMAND_EVAL_NO_ARGS'))
				.setColor(message.member.displayHexColor)
				.setFooter(`${message.language.get('COMMAND_EVAL_NAME')} | Developed By MILLION#1321`)
				.setTimestamp()
			return message.sendMessage(noArgsEmbed)
		}

		try {
			let timer = new Stopwatch()

			timer.start()
			let evaled = clean(eval(code))
			let evaledTime = timer.stop()

			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);

			if (evaled.includes(this.client.token))
				evaled = evaled.replace(this.client.token, '[Token Removed]');

			if (evaled.includes(this.client.token.split('.')[0]))
				evaled = evaled.replace(this.client.token.split('.')[0], '');
			if (evaled.includes(this.client.token.split('.')[1]))
				evaled = evaled.replace(this.client.token.split('.')[1], '');
			if (evaled.includes(this.client.token.split('.')[2]))
				evaled = evaled.replace(this.client.token.split('.')[2], '');

			let cEvaled = clean(evaled)

			let endShit
			if (cEvaled.length > 2039) {
				endShit = cEvaled.toChunks(2039)[0]
			} else endShit = cEvaled

			let embed = new MessageEmbed()
				.setAuthor(this.client.user.tag, this.client.user.avatarURL())
				.setTitle(message.language.get('COMMAND_EVAL_SUCC'))
				.setDescription(`\`\`\`js\n${endShit}\`\`\``)
				.setColor("#32a852")
				.setFooter(evaledTime);

			message.sendMessage(embed).catch(e => {
				const evalEmbed = new MessageEmbed()
					.setAuthor(this.client.user.tag, this.client.user.avatarURL())
					.setTitle(message.language.get('COMMAND_EVAL_ERR'))
					.setDescription(`\`\`\`js\n${e}\`\`\``)
					.setColor("#ff0000")
					.setFooter(evaledTime);
				message.sendMessage(evalEmbed).catch(e => {
					console.log(e)
				});
			});
		} catch (e) {
			const evalEmbed = new MessageEmbed()
				.setAuthor(this.client.user.tag, this.client.user.avatarURL())
				.setTitle(message.language.get('COMMAND_EVAL_ERR'))
				.setDescription(`\`\`\`js\n${e}\`\`\``)
				.setColor("#ff0000")
				.setFooter(message.language.get('COMMAND_EVAL_TIME', '0'));
			message.sendMessage(evalEmbed).catch(e => {
				console.log(e)
			});
		}
	}

};

function clean(text) {
	if (typeof (text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

class Question {
	constructor(args) {
		this.content = args;
	};

	create() {
		return `${this.content}?`;
	}
};
class Statement {
	constructor(args) {
		this.content = args;
	};

	create() {
		return `${this.content}.`;
	}
};
class Joke {
	constructor(args, funny) {
		this.content = args;
		this.end = funny;
	};

	create() {
		return `${this.content}.\n${this.end}`;
	}
};
