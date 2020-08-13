/**
 * From Klasa Default Commands (and edited)
 */
const { Command, Store, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['r', 're'],
			description: language => language.get('COMMAND_RELOAD_DESCRIPTION'),
			usage: '<Store:store|Piece:piece|everything:default>',
			runIn: ['text', 'dm'],
			bucket: 1,
			cooldown: 0,
			deletable: true,
			aliases: [],
			permissionLevel: 9,
			extendedHelp: 'No extended help available.',
		});
	}

	async run(message, [piece]) {
		if (piece === 'everything') return this.everything(message);
		if (piece instanceof Store) {
			const timer = new Stopwatch();
			await piece.loadAll();
			await piece.init();
			if (this.client.shard) {
				await this.client.shard.broadcastEval(`
					if (String(this.options.shards) !== '${this.client.options.shards}') this.${piece.name}.loadAll().then(() => this.${piece.name}.init());
				`);
			}
			let reloadAllEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get('COMMAND_RELOAD_ALL', [piece, timer.stop()]))
				.setColor(message.member.displayHexColor)
				.setFooter(`${message.language.get('COMMAND_RELOAD_NAME')} | Developed By MILLION#1321`)
				.setTimestamp()
			return message.sendMessage(reloadAllEmbed)
		}

		try {
			const item = await piece.reload();
			const timer = new Stopwatch();
			if (this.client.shard) {
				await this.client.shard.broadcastEval(`
					if (String(this.options.shards) !== '${this.client.options.shards}') this.${piece.store}.get('${piece.name}').reload();
				`);
			}
			let reloadTypeEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get('COMMAND_RELOAD', item.type, item.name, timer.stop()))
				.setColor(message.member.displayHexColor)
				.setFooter(`${message.language.get('COMMAND_RELOAD_NAME')} | Developed By MILLION#1321`)
				.setTimestamp()
			return message.sendMessage(reloadTypeEmbed)
		} catch (err) {
			piece.store.set(piece);
			let reloadErrorEmbed = new MessageEmbed()
				.setAuthor(message.author.tag, message.author.avatarURL())
				.setTitle(message.language.get('COMMAND_RELOAD_FAILED', [piece.type, piece.name]))
				.setColor('#ff0000')
				.setFooter(`${message.language.get('COMMAND_RELOAD_NAME')} | Developed By MILLION#1321`)
				.setTimestamp()
			return message.sendMessage(reloadErrorEmbed)
		}
	}

	async everything(message) {
		const timer = new Stopwatch();
		await Promise.all(this.client.pieceStores.map(async (store) => {
			await store.loadAll();
			await store.init();
		}));
		if (this.client.shard) {
			await this.client.shard.broadcastEval(`
				if (String(this.options.shards) !== '${this.client.options.shards}') this.pieceStores.map(async (store) => {
					await store.loadAll();
					await store.init();
				});
			`);
		}
		let reloadCommandEmbed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.avatarURL())
			.setTitle(message.language.get('COMMAND_RELOAD_EVERYTHING', [timer.stop()]))
			.setColor(message.member.displayHexColor)
			.setFooter(`${message.language.get('COMMAND_RELOAD_NAME')} | Developed By MILLION#1321`)
			.setTimestamp()
		return message.sendMessage(reloadCommandEmbed)
	}

};
