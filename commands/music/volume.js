const { Command } = require('klasa');
const { MessageEmbed, Collection } = require('discord.js');
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');
const colors = require('colors');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            usage: '<percentage:Integer>',
            runIn: ['text'],
            bucket: 2,
            cooldown: 5,
            deletable: true,
            aliases: [],
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {

        let volume = parseInt(message.args.join(' '));
        if (isNan(volume) || volume > 200 || volume < 1) {
            message.channel.send('no');
            return;
        }

        let memberVoiceChannel = message.member.voice.channel;
        if (!memberVoiceChannel) {
            let noSongEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('MUSIC_NOT_INVC'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_VOLUME_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp();
            return message.channel.send(noSongEmbed);
        }

        if (message.guild.me.voice.channel && message.guild.me.voice.channel !== memberVoiceChannel) {
            let noSongEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('MUSIC_NOT_IN_SAMEVC'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_VOLUME_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp();
            return message.channel.send(noSongEmbed);
        }

        message.guild.me.voice.connection.dispatcher.setVolume(volume / 100);

        let yesEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setTitle(message.language.get('COMMAND_VOLUME_CHANGED', volume))
            .setColor("#32a852")
            .setFooter(`${message.language.get('COMMAND_VOLUME_NAME')}  | Developed By MILLION#1321`)
            .setTimestamp();
        return message.channel.send(yesEmbed);

    }

    async init() {
        this.client.MusicObj = new Collection();
    }

};