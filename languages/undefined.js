const { Language } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);

        this.language = {
            DEFAULT: (key) => `${key} has not been localized for en-US yet.`,
            DEFAULT_LANGUAGE: 'Default Language',

            //defaults
            NO_BOT_PERMS: 'undefined',
            NO_PERMS: 'undefined',
            UNKNOWN_ERROR: 'undefined',
            XP_LEVEL_UP: (tag, level) => 'undefined',

            //inhibitors
            INHIBITOR_COOLDOWN: 'undefined',
            INHIBITOR_COOLDOWN_ACTIVE: (timeRem) => 'undefined',
            INHIBITOR_DISABLED: 'undefined',
            INHIBITOR_DISABLED_GLOBAL: 'undefined',
            INHIBITOR_DISABLED_GUILD: 'undefined',
            INHIBITOR_MISSING_BOT_PERMS: 'undefined',
            INHIBITOR_MISSING_BOT_PERMS_PERMS: (perms) => 'undefined',
            INHIBITOR_NSFW: 'undefined',
            INHIBITOR_NSFW_CHANNEL: 'undefined',
            INHIBITOR_PERMISSIONS: 'undefined',
            INHIBITOR_PERMISSIONS_ACTIVE: 'undefined',
            INHIBITOR_RUNIN: 'undefined',
            INHIBITOR_RUNIN_CHANNELS: (types) => 'undefined',
            INHIBITOR_RUNIN_NONE: (name) => 'undefined',

            COMMAND_PING: 'undefined',
            COMMAND_PING_DESCRIPTION: 'undefined',
            COMMAND_PING_WS: 'undefined',
            COMMAND_PING_MSG: 'undefined',
            COMMAND_PING_DB: 'undefined',
            COMMAND_PING_MS: (ms) => 'undefined',

            COMMAND_CARD_NAME: 'undefined',
            COMMAND_CARD_DESCRIPTION: 'undefined',
            COMMAND_CARD_NO_SUBCOMMAND: 'undefined',
            COMMAND_CARD_COLOR_NONE: 'undefined',
            COMMAND_CARD_COLOR_UPDATED: (color) => 'undefined',
            COMMAND_CARD_COLOR_NOTHEX: (color) => 'undefined',
            COMMAND_CARD_TAG_NONE: 'undefined',
            COMMAND_CARD_TAG_LONG: 'undefined',
            COMMAND_CARD_TAG_UPDATED: (tag) => 'undefined',

            COMMAND_RANK_NAME: 'undefined',
            COMMAND_RANK_DESCRIPTION: 'undefined',
            COMMAND_RANK_NO_DATA: 'undefined',
            COMMAND_RANK_NO_SETTINGS: 'undefined',

            COMMAND_LM_NAME: 'undefined',
            COMMAND_LM_DESCRIPTION: 'undefined',
            COMMAND_LM_TRUE: 'undefined',
            COMMAND_LM_FALSE: 'undefined',

            COMMAND_EVAL_NAME: 'undefined',
            COMMAND_EVAL_DESCRIPTION: 'undefined',
            COMMAND_EVAL_NO_ARGS: 'undefined',
            COMMAND_EVAL_SUCC: 'undefined',
            COMMAND_EVAL_ERR: 'undefined',
            COMMAND_EVAL_TIME: (time) => 'undefined',

            COMMAND_OWNER_NAME: 'undefined',
            COMMAND_OWNER_DESCRIPTION: 'undefined',
            COMMAND_OWNER_USER_SELF: 'undefined',
            COMMAND_OWNER_NO_USER: 'undefined',
            COMMAND_OWNER_NO_DATA: 'undefined',
            COMMAND_OWNER_UPDATED_TRUE: (tag) => 'undefined',
            COMMAND_OWNER_UPDATED_FALSE: (tag) => 'undefined',

            COMMAND_PREFIX_NAME: 'undefined',
            COMMAND_PREFIX_IS: (prefix) => 'undefined',
            COMMAND_PREFIX_DESCRIPTION: 'undefined',
            COMMAND_PREFIX_NO_ARGS: 'undefined',
            COMMAND_PREFIX_UPDATED: (prefix) => 'undefined',

            COMMAND_BLACKLIST_NAME: 'undefined',
            COMMAND_BLACKLIST_DESCRIPTION: 'undefined',
            COMMAND_BLACKLIST_NO_USER: 'undefined',
            COMMAND_BLACKLIST_USER_SELF: 'undefined',
            COMMAND_BLACKLIST_UPDATED_TRUE: (tag) => 'undefined',
            COMMAND_BLACKLIST_UPDATED_FALSE: (tag) => 'undefined',

            COMMAND_EXEC_NAME: 'undefined',
            COMMAND_EXEC_DESCRIPTION: 'undefined',
            COMMAND_EXEC_NO_ARGS: 'undefined',
            COMMAND_EXEC_ERROR: 'undefined',
            COMMAND_EXEC_SUCC: 'undefined',
            COMMAND_EXEC_ERR: 'undefined',

            COMMAND_RELOAD_NAME: 'undefined',
            COMMAND_RELOAD_DESCRIPTION: 'undefined',
            COMMAND_RELOAD: (type, name, time) => 'undefined',
            COMMAND_RELOAD_FAILED: (type, name) => 'undefined',
            COMMAND_RELOAD_ALL: (type, time) => 'undefined',
            COMMAND_RELOAD_EVERYTHING: (time) => 'undefined',

            COMMAND_HELP_NAME: 'undefined',
            COMMAND_HELP_DESCRIPTION: 'undefined',
            COMMAND_HELP_CMD_NOTFOUND: (cmd) => 'undefined',

            COMMAND_REBOOT_NAME: 'undefined',
            COMMAND_REBOOT_DESCRIPTION: 'undefined',
            COMMAND_REBOOT_SUCC: 'undefined',

            COMMAND_BIRB_DESCRIPTION: 'undefined',
            COMMAND_CAR_DESCRIPTION: 'undefined',
            COMMAND_CAT_DESCRIPTION: 'undefined',
            COMMAND_DOG_DESCRIPTION: 'undefined',
            COMMAND_FOX_DESCRIPTION: 'undefined',
            COMMAND_KOALA_DESCRIPTION: 'undefined',
            COMMAND_PANDA_DESCRIPTION: 'undefined',
            COMMAND_REDPANDA_DESCRIPTION: 'undefined',
            COMMAND_SHIBE_DESCRIPTION: 'undefined',
            COMMAND_SPACE_DESCRIPTION: 'undefined',

            COMMAND_INVITE_NAME: 'undefined',
            COMMAND_INVITE_TXT: 'undefined',
            COMMAND_INVITE_DESCRIPTION: 'undefined',

            COMMAND_VOTE_NAME: 'undefined',
            COMMAND_VOTE_DESCRIPTION: 'undefined',

            COMMAND_SELFPURGE_NAME: 'undefined',
            COMMAND_SELFPURGE_NOARGS: 'undefined',

            COMMAND_APOD_NAME: 'undefined',
            COMMAND_APOD_DESCRIPTION: 'undefined',

            //under this line is shit pls dont scroll down

            HOLY_FUCK: 'holy fuck',
            FUCK: 'fuck',

















            // COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,
            PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => {
                if (Array.isArray(prefix)) return new MessageEmbed()
                    .setTitle(`This guild's prefixes are: \`${prefix.join('\`, \`')}\``);
                else return new MessageEmbed()
                    .setTitle(`This guild's prefix is: \`${prefix}\``);
            },
            // SETTING_GATEWAY_EXPECTS_GUILD: 'The parameter <Guild> expects either a Guild or a Guild Object.',
            // SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
            // SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
            // SETTING_GATEWAY_SPECIFY_VALUE: 'You must specify the value to add or filter.',
            // SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `The key ${key} is not an Array.`,
            // SETTING_GATEWAY_KEY_NOEXT: (key) => `The key ${key} does not exist in the current data schema.`,
            // SETTING_GATEWAY_INVALID_TYPE: 'The type parameter must be either add or remove.',
            // SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece, value) => `${piece.key} doesn't accept the value: ${value}`,
            // RESOLVER_MULTI_TOO_FEW: (name, min = 1) => `Provided too few ${name}s. At least ${min} ${min === 1 ? 'is' : 'are'} required.`,
            // RESOLVER_INVALID_BOOL: (name) => `${name} must be true or false.`,
            // RESOLVER_INVALID_CHANNEL: (name) => `${name} must be a channel tag or valid channel id.`,
            // RESOLVER_INVALID_CUSTOM: (name, type) => `${name} must be a valid ${type}.`,
            // RESOLVER_INVALID_DATE: (name) => `${name} must be a valid date.`,
            // RESOLVER_INVALID_DURATION: (name) => `${name} must be a valid duration string.`,
            // RESOLVER_INVALID_EMOJI: (name) => `${name} must be a custom emoji tag or valid emoji id.`,
            // RESOLVER_INVALID_FLOAT: (name) => `${name} must be a valid number.`,
            // RESOLVER_INVALID_GUILD: (name) => `${name} must be a valid guild id.`,
            // RESOLVER_INVALID_INT: (name) => `${name} must be an integer.`,
            // RESOLVER_INVALID_LITERAL: (name) => `Your option did not match the only possibility: ${name}`,
            // RESOLVER_INVALID_MEMBER: (name) => `${name} must be a mention or valid user id.`,
            // RESOLVER_INVALID_MESSAGE: (name) => `${name} must be a valid message id.`,
            // RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
            // RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
            // RESOLVER_INVALID_ROLE: (name) => `${name} must be a role mention or role id.`,
            // RESOLVER_INVALID_STRING: (name) => `${name} must be a valid string.`,
            // RESOLVER_INVALID_TIME: (name) => `${name} must be a valid duration or date string.`,
            // RESOLVER_INVALID_URL: (name) => `${name} must be a valid url.`,
            // RESOLVER_INVALID_USER: (name) => `${name} must be a mention or valid user id.`,
            // RESOLVER_STRING_SUFFIX: ' characters',
            // RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
            // RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
            // RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
            // RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
            // REACTIONHANDLER_PROMPT: 'Which page would you like to jump to?',
            // COMMANDMESSAGE_MISSING: 'Missing one or more required arguments after end of input.',
            // COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} is a required argument.`,
            // COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Missing a required option: (${possibles})`,
            // COMMANDMESSAGE_NOMATCH: (possibles) => `Your option didn't match any of the possibilities: (${possibles})`,
            // // eslint-disable-next-line max-len
            // MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) => `${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **${abortOptions.join('**, **')}** to abort this prompt.`,
            // // eslint-disable-next-line max-len
            // MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) => `${tag} | **${name}** is a repeating argument | You have **${time}** seconds to respond to this prompt with additional valid arguments. Type **${cancelOptions.join('**, **')}** to cancel this prompt.`,
            // MONITOR_COMMAND_HANDLER_ABORTED: 'Aborted',
            // // eslint-disable-next-line max-len
            // // INHIBITOR_COOLDOWN: (remaining, guildCooldown) => `${guildCooldown ? 'Someone has' : 'You have'} already used this command. You can use this command again in ${remaining} second${remaining === 1 ? '' : 's'}.`,
            // // INHIBITOR_DISABLED_GUILD: 'This command has been disabled by an admin in this guild.',
            // // INHIBITOR_DISABLED_GLOBAL: 'This command has been globally disabled by the bot owner.',
            // // INHIBITOR_MISSING_BOT_PERMS: (missing) => `Insufficient permissions, missing: **${missing}**`,
            // // INHIBITOR_NSFW: 'You can only use NSFW commands in NSFW channels.',
            // // INHIBITOR_PERMISSIONS: 'You do not have permission to use this command.',
            // INHIBITOR_REQUIRED_SETTINGS: (settings) => `The guild is missing the **${settings.join(', ')}** guild setting${settings.length !== 1 ? 's' : ''} and thus the command cannot run.`,
            // // INHIBITOR_RUNIN: (types) => `This command is only available in ${types} channels.`,
            // // INHIBITOR_RUNIN_NONE: (name) => `The ${name} command is not configured to run in any channel.`,
            // COMMAND_BLACKLIST_DESCRIPTION: 'Blacklists or un-blacklists users and guilds from the bot.',
            // COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
            //     usersAdded.length ? `**Users Added**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
            //     usersRemoved.length ? `**Users Removed**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
            //     guildsAdded.length ? `**Guilds Added**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
            //     guildsRemoved.length ? `**Guilds Removed**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
            // ].filter(val => val !== '').join('\n'),
            // COMMAND_EVAL_DESCRIPTION: 'Evaluates arbitrary Javascript. Reserved for bot owner.',
            // COMMAND_EVAL_EXTENDEDHELP: [
            //     'The eval command evaluates code as-in, any error thrown from it will be handled.',
            //     'It also uses the flags feature. Write --silent, --depth=number or --async to customize the output.',
            //     'The --silent flag will make it output nothing.',
            //     "The --depth flag accepts a number, for example, --depth=2, to customize util.inspect's depth.",
            //     'The --async flag will wrap the code into an async function where you can enjoy the use of await, however, if you want to return something, you will need the return keyword.',
            //     'The --showHidden flag will enable the showHidden option in util.inspect.',
            //     'If the output is too large, it\'ll send the output as a file, or in the console if the bot does not have the ATTACH_FILES permission.'
            // ].join('\n'),
            // COMMAND_EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
            // COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
            // COMMAND_EVAL_SENDFILE: (time, type) => `Output was too long... sent the result as a file.\n**Type**:${type}\n${time}`,
            // COMMAND_EVAL_SENDCONSOLE: (time, type) => `Output was too long... sent the result to console.\n**Type**:${type}\n${time}`,
            // COMMAND_UNLOAD: (type, name) => `✅ Unloaded ${type}: ${name}`,
            // COMMAND_UNLOAD_DESCRIPTION: 'Unloads the klasa piece.',
            // COMMAND_UNLOAD_WARN: 'You probably don\'t want to unload that, since you wouldn\'t be able to run any command to enable it again',
            // COMMAND_TRANSFER_ERROR: '❌ That file has been transfered already or never existed.',
            // COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Successfully transferred ${type}: ${name}.`,
            // COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
            // COMMAND_TRANSFER_DESCRIPTION: 'Transfers a core piece to its respective folder.',
            // COMMAND_REBOOT: 'Rebooting...',
            // COMMAND_REBOOT_DESCRIPTION: 'Reboots the bot.',
            // COMMAND_LOAD: (time, type, name) => `✅ Successfully loaded ${type}: ${name}. (Took: ${time})`,
            // COMMAND_LOAD_FAIL: 'The file does not exist, or an error occurred while loading your file. Please check your console.',
            // COMMAND_LOAD_ERROR: (type, name, error) => `❌ Failed to load ${type}: ${name}. Reason:${util.codeBlock('js', error)}`,
            // COMMAND_LOAD_DESCRIPTION: 'Load a piece from your bot.',
            // COMMAND_PING: 'Ping?',
            // COMMAND_PING_DESCRIPTION: 'Runs a connection test to Discord.',
            // COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
            // COMMAND_INVITE: () => [
            //     `To add ${this.client.user.username} to your discord guild:`,
            //     `<${this.client.invite}>`,
            //     util.codeBlock('', [
            //         'The above link is generated requesting the minimum permissions required to use every command currently.',
            //         'I know not all permissions are right for every guild, so don\'t be afraid to uncheck any of the boxes.',
            //         'If you try to use a command that requires more permissions than the bot is granted, it will let you know.'
            //     ].join(' ')),
            //     'Please file an issue at <https://github.com/dirigeants/klasa> if you find any bugs.'
            // ],
            // COMMAND_INVITE_DESCRIPTION: 'Displays the invite link of the bot, to invite it to your guild.',
            // COMMAND_INFO: [
            //     "Klasa is a 'plug-and-play' framework built on top of the Discord.js library.",
            //     'Most of the code is modularized, which allows developers to edit Klasa to suit their needs.',
            //     '',
            //     'Some features of Klasa include:',
            //     '• 🐇💨 Fast loading times with ES2017 support (`async`/`await`)',
            //     '• 🎚🎛 Per-client/guild/user settings that can be extended with your own fields',
            //     '• 💬 Customizable command system with automated parameter resolving and the ability to load/reload commands on-the-fly',
            //     '• 👀 "Monitors", which can watch messages and edits (for swear filters, spam protection, etc.)',
            //     '• ⛔ "Inhibitors", which can prevent commands from running based on any condition you wish to apply (for permissions, blacklists, etc.)',
            //     '• 🗄 "Providers", which simplify usage of any database of your choosing',
            //     '• ✅ "Finalizers", which run after successful commands (for logging, collecting stats, cleaning up responses, etc.)',
            //     '• ➕ "Extendables", which passively add methods, getters/setters, or static properties to existing Discord.js or Klasa classes',
            //     '• 🌐 "Languages", which allow you to localize your bot\'s responses',
            //     '• ⏲ "Tasks", which can be scheduled to run in the future, optionally repeating',
            //     '',
            //     'We hope to be a 100% customizable framework that can cater to all audiences. We do frequent updates and bugfixes when available.',
            //     "If you're interested in us, check us out at https://klasa.js.org"
            // ],
            // COMMAND_INFO_DESCRIPTION: 'Provides some information about this bot.',
            // COMMAND_HELP_DESCRIPTION: 'Display help for a command.',
            // COMMAND_HELP_NO_EXTENDED: 'No extended help available.',
            // COMMAND_HELP_DM: '📥 | The list of commands you have access to has been sent to your DMs.',
            // COMMAND_HELP_NODM: '❌ | You have DMs disabled, I couldn\'t send you the commands in DMs.',
            // COMMAND_HELP_USAGE: (usage) => `Usage :: ${usage}`,
            // COMMAND_HELP_EXTENDED: 'Extended Help ::',
            // COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
            // COMMAND_ENABLE_DESCRIPTION: 'Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.',
            // COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
            // COMMAND_DISABLE_DESCRIPTION: 'Re-disables or temporarily disables a command/inhibitor/monitor/finalizer/event. Default state restored on reboot.',
            // COMMAND_DISABLE_WARN: 'You probably don\'t want to disable that, since you wouldn\'t be able to run any command to enable it again',
            // COMMAND_CONF_NOKEY: 'You must provide a key',
            // COMMAND_CONF_NOVALUE: 'You must provide a value',
            // COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} may not be disabled.`,
            // COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
            // COMMAND_CONF_KEY_NOT_ARRAY: 'This key is not array type. Use the action \'reset\' instead.',
            // COMMAND_CONF_GET_NOEXT: (key) => `The key **${key}** does not seem to exist.`,
            // COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
            // COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,
            // COMMAND_CONF_NOCHANGE: (key) => `The value for **${key}** was already that value.`,
            // COMMAND_CONF_SERVER_DESCRIPTION: 'Define per-guild settings.',
            // COMMAND_CONF_SERVER: (key, list) => `**Guild Settings${key}**\n${list}`,
            // COMMAND_CONF_USER_DESCRIPTION: 'Define per-user settings.',
            // COMMAND_CONF_USER: (key, list) => `**User Settings${key}**\n${list}`,
            // COMMAND_STATS: (memUsage, uptime, users, guilds, channels, klasaVersion, discordVersion, processVersion, message) => [
            //     '= STATISTICS =',
            //     '',
            //     `• Mem Usage  :: ${memUsage} MB`,
            //     `• Uptime     :: ${uptime}`,
            //     `• Users      :: ${users}`,
            //     `• Guilds     :: ${guilds}`,
            //     `• Channels   :: ${channels}`,
            //     `• Klasa      :: v${klasaVersion}`,
            //     `• Discord.js :: v${discordVersion}`,
            //     `• Node.js    :: ${processVersion}`,
            //     `• Shard      :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${this.client.options.totalShardCount}`
            // ],
            // COMMAND_STATS_DESCRIPTION: 'Provides some details about the bot and stats.',
            // MESSAGE_PROMPT_TIMEOUT: 'The prompt has timed out.',
            // TEXT_PROMPT_ABORT_OPTIONS: ['abort', 'stop', 'cancel']
        };
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         * please note, that as the Language is loaded before the client is loaded,
         * using this.client in a literal sense may throw errors such as:
         * this.client.user.username would throw "can't get property username of null"
         */
    }

};