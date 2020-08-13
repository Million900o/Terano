const { Finalizer, Colors } = require('klasa');

module.exports = class extends Finalizer {

    constructor(...args) {
        super(...args);
        this.shard = new Colors({ text: 'cyan' });
        this.reprompted = [new Colors({ text: 'blue' }), new Colors({ background: 'red' })];
        this.user = new Colors({ text: 'yellow' });
        this.channel = {
            text: new Colors({ text: 'magenta' }),
            dm: new Colors({ text: 'white' })
        };
    }

    run(message, command, response, timer) {
        const { type } = message.channel;
        const shard = message.guild ? message.guild.shardID : 0;
        this.client.emit('log', [
            this.shard.format(`[Shard ${shard}]`),
            `${command.name}(${message.args ? message.args.join(', ') : ''})`,
            this.reprompted[Number(message.reprompted)].format(`[${timer.stop()}]`),
            this.user.format(`${message.author.username}[${message.author.id}]`),
            this.channel[type].format(this[type](message))
        ].join(' '));
    }

    init() {
        this.enabled = this.client.options.commandLogging;
    }

    text(message) {
        return `${message.guild.name}[${message.guild.id}]`;
    }

    dm() {
        return 'Direct Messages';
    }

};
