const { Command } = require('klasa');
const { MessageEmbed, Collection } = require('discord.js');
const ytsr = require('ytsr')
const ytdl = require('ytdl-core')
const colors = require('colors')

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
        let song = await ytsr(message.args.join(' '))
        if (!song || !song.items || !song.items[0])
            return //add embed here

        let channel = await message.member.voice.channel.join()
        channel.on('ready', () => { console.log(`${new Date().toLocaleString()}`) })
        channel.on('error', (err) => { channel.disconnect(); throw new Error('FUCK') })





        ytsr(message.args.join(' '), async (err, res) => { //replace this with search function\
            if (err) message.channel.send(err);
            if (!res) return;
            if (!res.items[0]) return;
            let video = res.items[0].link;
            channel.play(ytdl(video, { highWaterMark: 1 >> 6969, quality: 'highestaudio' })).on("finish", () => {
                channel.disconnect()
            }).on("error", async (err) => {
                channel.disconnect()
            }).on('finish', async () => {
                channel.disconnect()
            })
        });
    }

    async init() {
        this.client.MusicObj = new Collection()
    }

};