const config = require('./config.json');
const { Client, KlasaConsole, KlasaClient } = require('klasa');
const { Intents, Collection } = require('discord.js');
const { black } = require('colors');

// Client.defaultUserSchema.add("xp", "Number")
// Client.defaultUserSchema.add("level", "Number")
// Client.defaultUserSchema.add("card-tag", "String")
// Client.defaultUserSchema.add("card-color", "String")

Client.defaultPermissionLevels.add(4, ({ guild, member }) => guild && member.permissions.has('MANAGE_MESSAGES'), { fetch: true });
Client.defaultPermissionLevels.add(5, ({ guild, member }) => guild && member.permissions.has(['BAN_MEMBERS', 'KICK_MEMBERS']), { fetch: true });
Client.defaultPermissionLevels.add(8, ({ client, author }) => client.settings.testers.includes(author.id));
Client.defaultPermissionLevels.add(9, ({ author }) => {
    if (author.settings.owner.active) return true;
    return false;
});

//Permissions levels

//Level	Break	Fetch	Description
// 0	false	false	Everyone can use these commands
// 4    false   true    Manage Messages
// 5    false   true    Ban and Kick
// 6	false	true	Members of guilds must have 'MANAGE_GUILD' permission
// 7	false	true	Guild Owner
// 8    false   false   Bot Tester
// 9	true	false	Bot Owner
// 10	false	false	Bot Owner(silent)

Client.defaultClientSchema.add('testers', 'String', { array: true });
Client.defaultClientSchema.add('stats', folder => {
    folder.add('commandsRun', 'Number');
    folder.add('messages', 'Number');
});

Client.defaultUserSchema.add('owner', folder => {
    folder.add('active', 'Boolean', { default: false });
    folder.add('givenBy', 'String', { default: 'null' });
});

Client.defaultGuildSchema.add("noPerms", "Boolean", { default: true });
Client.defaultGuildSchema.add("levelMessage", "Boolean", { default: false });
Client.defaultGuildSchema.add("music", folder => { });

String.prototype.toChunks = require('./functions/Strings').toChunks;

Client.prototype.isEven = function isEven(Num) {
    if (!Num || isNaN(Num)) return false;
    let test = Num / 2;
    if (test.toString().includes('.')) return false;
    return true;
};

let ClientOptions = {
    console: {
        colors: {
            log: {
                time: { background: "black", text: "grey" },
                message: { text: "green" }
            }
        }
    },
    saveStats: true,
    commandMessageLifetime: 69,
    fetchAllMembers: false,
    prefix: "™",
    commandEditing: true,
    commandLogging: true,
    typing: false,
    readyMessage: (client) => `${client.user.tag} (${client.user.id}) is ready!`,
    disabledCorePieces: ['commands'],
    providers: {
        default: 'mongodb',
        mongodb: {
            connectionString: "mongodb://localhost:27017/klasa2"
        },
    },
    messageSweepInterval: 1000 * 60
};

new Client(ClientOptions).login(config.discord.terano);