const { Command } = require('klasa');
const { MessageEmbed, Collection } = require('discord.js');
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');
const colors = require('colors');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            usage: '<song:String>',
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
        let memberVoiceChannel = message.member.voice.channel;
        if (!memberVoiceChannel) {
            let noSongEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('MUSIC_NOT_INVC'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_PLAY_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp();
            return message.channel.send(noSongEmbed);
        }

        if (message.guild.me.voice.channel && message.guild.me.voice.channel !== memberVoiceChannel) {
            let noSongEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('MUSIC_NOT_IN_SAMEVC'))
                .setColor("ff0000")
                .setFooter(`${message.language.get('COMMAND_PLAY_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp();
            return message.channel.send(noSongEmbed);
        }

        if (message.args.join(' ').startsWith('https://') || message.args.join(' ').startsWith('http://')) {
            let connection;
            if (message.guild.me.voice.channel && this.client.MusicObj.get(message.guild.id)) {
                connection = this.client.MusicObj.get(message.guild.id);
            } else {
                connection = await memberVoiceChannel.join();
                this.client.MusicObj.set(message.guild.id, connection);
                connection.on('disconnect', () => {
                    this.client.MusicObj.delete(message.guild.id);
                }); //should work idk
            }

            connection.play(message.args[0]);

            let playingEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_PLAY_PLAYING', message.args.join(' ')))
                .setColor("#32a852")
                .setFooter(`${message.language.get('COMMAND_PLAY_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp();
            return message.channel.send(playingEmbed);
        } else {
            let song = await ytsr(message.args.join(' '));
            if (!song || !song.items || !song.items[0]) {
                let noSongEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setTitle(message.language.get('COMMAND_PLAY_NOSONG'))
                    .setColor("ff0000")
                    .setFooter(`${message.language.get('COMMAND_PLAY_NAME')}  | Developed By MILLION#1321`)
                    .setTimestamp();
                return message.channel.send(noSongEmbed);
            }

            let connection;
            if (message.guild.me.voice.channel && this.client.MusicObj.get(message.guild.id)) {
                connection = this.client.MusicObj.get(message.guild.id);
            } else {
                connection = await memberVoiceChannel.join();
                this.client.MusicObj.set(message.guild.id, connection);
                connection.on('disconnect', () => {
                    this.client.MusicObj.delete(message.guild.id);
                }); //should work idk
            }

            connection.play(ytdl(song.items[0].link, { filter: 'audioonly' }));

            let playingEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_PLAY_PLAYING', song.items[0].title))
                .setColor("#32a852")
                .setFooter(`${message.language.get('COMMAND_PLAY_NAME')}  | Developed By MILLION#1321`)
                .setTimestamp();
            return message.channel.send(playingEmbed);
        }
    }

    async init() {
        this.client.MusicObj = new Collection();
    }

};