const DBL = require('dblapi.js');
const { MessageEmbed, WebhookClient } = require('discord.js');
const { Colors } = require('klasa');
const config = require('../config.json');
const colors = require('colors');

let good = new Colors({ text: 'green' });
let bad = new Colors({ text: 'red' });
let ok = new Colors({ text: 'yellow' });

const Start = async (client, token, options) => {
    if (client.shard == undefined) {
        let port = options.port;
        let auth = options.auth;
        const dbl = new DBL(token, { webhookAuth: auth, webhookPort: port }, client);
        client.dbl = dbl;
        setInterval(() => {
            dbl.postStats(client.guilds.cache.size);
        }, 1 * 60 * 60 * 1000);
        dbl.webhook.on('ready', hook => { client.emit('log', bad.format(`DBL Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`)); });
        dbl.webhook.on('vote', async vote => { handleVote(client, vote); });
        dbl.on('posted', () => { client.emit('log', ok.format(`Stats Posted to DBL, ${client.guilds.cache.size} guilds`)); });
        return;
    }

    if (client.shard.ids[0] !== 0) return;

    try {
        const dbl = new DBL(token, { webhookAuth: '0', webhookPort: 8008 }, client);
        client.dbl = dbl;

        dbl.webhook.on('ready', hook => { client.emit('log', bad.format(`DBL Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`)); });
        dbl.webhook.on('vote', async vote => { handleVote(client, vote); });
        dbl.on('posted', () => { client.emit('log', ok.format(`Stats Posted to DBL, ${client.guilds.cache.size} guilds`)); });
        client.emit('log', good.format(`[Shard ${client.shard.id}] started the DBL webhook`));
    } catch (e) { client.emit('error', e); }
};

const handleVote = async (client, vote) => {
    let toChannel = new MessageEmbed()
        .setAuthor('Vote', client.user.avatarURL())
        .setDescription(`<@${vote.user}> has voted for ${client.user.username}!`)
        .setColor(0);

    let channel = new WebhookClient(config.webhooks.vote.id, config.webhooks.vote.token);
    if (channel) channel.send(toChannel);

    client.emit('log', ok.format(`${vote.user} voted!`));

    let member = await client.users.fetch(`${vote.user}`);
    if (!member) return;

    let toMemberEmbed = new MessageEmbed()
        .setAuthor('Vote', client.user.avatarURL())
        .setColor(0)
        .setDescription(`Thank you for voting, ${member}`)
        .setFooter(`You can vote again in 12 hours`)
        .setTimestamp();

    if (member.settings.noDM) return;

    if (vote.isWeekend) {
        member.send(`Since today counts as a weekend, your vote counts as two:heart_exclamation:`).catch(e => { });
    }
    member.send(toMemberEmbed).catch(e => { });
};

module.exports = { Start, handleVote };