const { Language } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);

        this.language = {
            DEFAULT: (key) => `${key} has not been localized for en-US yet.`,
            DEFAULT_LANGUAGE: 'Default Language',

            //defaults
            NO_BOT_PERMS: 'You do not have the required bot permissions to run this command.',
            NO_PERMS: 'You do not have the required permissions to run this command.',
            UNKNOWN_ERROR: 'An unknown error has occured, please try again.',
            XP_LEVEL_UP: (tag, level) => `${tag} is now level ${level}!`,

            //inhibitors
            INHIBITOR_COOLDOWN: 'Cooldown',
            INHIBITOR_COOLDOWN_ACTIVE: (timeRem) => `This command is on cooldown, you need to wait ${timeRem} seconds.`,
            INHIBITOR_DISABLED: `Disabled`,
            INHIBITOR_DISABLED_GLOBAL: 'This command has been disabled by the bot devs.',
            INHIBITOR_DISABLED_GUILD: 'This command has been disabled by the guild admins.',
            INHIBITOR_MISSING_BOT_PERMS: `Missing Bot Permissions`,
            INHIBITOR_MISSING_BOT_PERMS_PERMS: (perms) => `I am missing the permissions: \`${perms}\``,
            INHIBITOR_NSFW: 'NSFW Command',
            INHIBITOR_NSFW_CHANNEL: 'This command can only be used in a NSFW channel.',
            INHIBITOR_PERMISSIONS: 'Missing Permissions',
            INHIBITOR_PERMISSIONS_ACTIVE: 'You are missing the correct permissions to run this command.',
            INHIBITOR_RUNIN: 'Command Restrictions',
            INHIBITOR_RUNIN_CHANNELS: (types) => `This command is only available in ${types} channels.`,
            INHIBITOR_RUNIN_NONE: (name) => `The ${name} command is not configured to run in any channel.`,

            COMMAND_PING: 'Ping!',
            COMMAND_PING_DESCRIPTION: 'Get the bot\'s ping.',
            COMMAND_PING_WS: 'WS Ping',
            COMMAND_PING_MSG: 'Ping',
            COMMAND_PING_DB: 'MongoDB',
            COMMAND_PING_MS: (ms) => `${ms}ms`,

            COMMAND_CARD_NAME: 'Card',
            COMMAND_CARD_DESCRIPTION: 'Configure your rank card.',
            COMMAND_CARD_NO_SUBCOMMAND: 'Improper command usage, please choose to configure your card color or tag.',
            COMMAND_CARD_COLOR_NONE: 'Improper command usage, please include a color.',
            COMMAND_CARD_COLOR_UPDATED: (color) => `Your rank card color has been updated to: \`${color}\``,
            COMMAND_CARD_COLOR_NOTHEX: (color) => `Improper command usage, \`${color}\` didn't pass the regex test.`,
            COMMAND_CARD_TAG_NONE: 'Improper command usage, please include a string to change your tag to.',
            COMMAND_CARD_TAG_LONG: 'Improper command usage, please include a string shorter than 25 characters',
            COMMAND_CARD_TAG_UPDATED: (tag) => `Your tag has been updated to: \`${tag}\``,

            COMMAND_RANK_NAME: 'Rank',
            COMMAND_RANK_DESCRIPTION: 'View your level and xp in an epic format.',
            COMMAND_RANK_NO_DATA: 'You do not have a rank yet, try sending a few more messages.',
            COMMAND_RANK_NO_SETTINGS: 'You have not set your rank card settings yet.',

            COMMAND_LM_NAME: 'Level Messages',
            COMMAND_LM_DESCRIPTION: 'Enable/Disable the level up messages.',
            COMMAND_LM_TRUE: 'The Level-UP Message will now be sent',
            COMMAND_LM_FALSE: 'The Level-UP Message will no longer be sent',

            COMMAND_EVAL_NAME: 'Eval',
            COMMAND_EVAL_DESCRIPTION: 'Make the bot run js code.',
            COMMAND_EVAL_NO_ARGS: 'Imprpoer command usage, please include code to evaluate.',
            COMMAND_EVAL_SUCC: 'Eval Successful',
            COMMAND_EVAL_ERR: 'Eval Unsuccessful',
            COMMAND_EVAL_TIME: (time) => `Evaluated in ${time}μs`,

            COMMAND_OWNER_NAME: 'Owner',
            COMMAND_OWNER_DESCRIPTION: 'Add/Remove bot owner status from a user.',
            COMMAND_OWNER_USER_SELF: 'You can\'t remove your own owner status.',
            COMMAND_OWNER_NO_USER: 'Improper command usage, please include a user ID or mention.',
            COMMAND_OWNER_NO_DATA: 'This user does not have data loaded, have they sent a message?',
            COMMAND_OWNER_UPDATED_TRUE: (tag) => `${tag} is now bot owner!`,
            COMMAND_OWNER_UPDATED_FALSE: (tag) => `${tag} is no longer bot owner.`,

            COMMAND_PREFIX_NAME: 'Prefix',
            COMMAND_PREFIX_IS: (prefix) => `The prefix here is \`${prefix}\`.`,
            COMMAND_PREFIX_DESCRIPTION: 'Set the bot\'s prefix for the guild.',
            COMMAND_PREFIX_NO_ARGS: 'Impropper command usage, please include a new command prefix.',
            COMMAND_PREFIX_UPDATED: (prefix) => `This guild's prefix is now \`${prefix}\`.`,

            COMMAND_BLACKLIST_NAME: 'Blacklist',
            COMMAND_BLACKLIST_DESCRIPTION: 'Blacklist a user.',
            COMMAND_BLACKLIST_NO_USER: 'Improper command usage, please inclode a user ID or mention.',
            COMMAND_BLACKLIST_USER_SELF: 'You can\'t blacklist yourself.',
            COMMAND_BLACKLIST_UPDATED_TRUE: (tag) => `${tag} is now blacklisted.`,
            COMMAND_BLACKLIST_UPDATED_FALSE: (tag) => `${tag} is no longer blacklisted.`,

            COMMAND_EXEC_NAME: 'Exec',
            COMMAND_EXEC_DESCRIPTION: 'Execute code as if you were in the console.',
            COMMAND_EXEC_NO_ARGS: 'Improper command usage, please include a command to execute.',
            COMMAND_EXEC_ERROR: 'An Error Has Occured',
            COMMAND_EXEC_SUCC: 'Exececute Sucessful',
            COMMAND_EXEC_ERR: 'Exececute Unsucessful',

            COMMAND_RELOAD_NAME: 'Reload',
            COMMAND_RELOAD_DESCRIPTION: 'Reloads a klasa piece, or all pieces of a klasa store.',
            COMMAND_RELOAD: (type, name, time) => `Reloaded ${type}: \`${name}\`. (Took: ${time})`,
            COMMAND_RELOAD_FAILED: (type, name) => `Failed to reload ${type}: \`${name}\`. Please check the Console.`,
            COMMAND_RELOAD_ALL: (type, time) => `Reloaded all ${type}. (Took: ${time})`,
            COMMAND_RELOAD_EVERYTHING: (time) => `Reloaded everything. (Took: ${time})`,

            COMMAND_HELP_NAME: 'Help',
            COMMAND_HELP_DESCRIPTION: 'Get a list of commands or more information on a command.',
            COMMAND_HELP_CMD_NOTFOUND: (cmd) => `${cmd} is not a registered command.`,
            COMMAND_HELP_CAT_MUSIC: 'Music Commands',
            COMMAND_HELP_CAT_MOD: 'Moderator Commands',
            COMMAND_HELP_CAT_LEVEL: 'Level Commands',
            COMMAND_HELP_CAT_ROKI: 'SmartAPI Commands',
            COMMAND_HELP_CAT_OTHER: 'Other Commands',

            COMMAND_REBOOT_NAME: 'Reboot',
            COMMAND_REBOOT_DESCRIPTION: 'Reboot the bot',
            COMMAND_REBOOT_SUCC: 'Successfully Rebooting',

            COMMAND_BIRB_DESCRIPTION: 'none',
            COMMAND_CAR_DESCRIPTION: 'none',
            COMMAND_CAT_DESCRIPTION: 'none',
            COMMAND_DOG_DESCRIPTION: 'none',
            COMMAND_FOX_DESCRIPTION: 'none',
            COMMAND_KOALA_DESCRIPTION: 'none',
            COMMAND_PANDA_DESCRIPTION: 'none',
            COMMAND_REDPANDA_DESCRIPTION: 'none',
            COMMAND_SHIBE_DESCRIPTION: 'none',
            COMMAND_SPACE_DESCRIPTION: 'none',

            COMMAND_INVITE_NAME: 'Invite',
            COMMAND_INVITE_TXT: 'Invite me here!',
            COMMAND_INVITE_DESCRIPTION: 'Get the link to invite me to your own server.',

            COMMAND_VOTE_NAME: 'Vote',
            COMMAND_VOTE_DESCRIPTION: 'Get the link to vote for me on DBL (top.gg).',

            COMMAND_SELFPURGE_NAME: 'Self Purge',
            COMMAND_SELFPURGE: (amount) => `Deleted ${amount} messages sent by me`,
            COMMAND_SELFPURGE_NOARGS: 'Improper command usage, please include a number between 0 and 100',

            COMMAND_APOD_NAME: 'Astronomy Picture of the Day',
            COMMAND_APOD_DESCRIPTION: 'Get the astronomy picture of the day from nasa',

            MUSIC_NOT_INVC: 'You are not currently in a voice channel.',
            MUSIC_NOT_IN_SAMEVC: 'We are not currently in the same voice channel.',

            COMMAND_PLAY_NAME: 'Play',
            COMMAND_PLAY_DESCIPTION: 'Play a song lol.',
            COMMAND_PLAY_NOSONG: 'No song found.',
            COMMAND_PLAY_PLAYING: (song) => `Now playing: \`${song}\``,

            COMMAND_VOLUME_NAME: 'Volume',
            COMMAND_COLUME_DESCRIPTION: 'Change the volume.',
            COMMAND_VOLUME_CHANGED: (int) => `Changed the volume to \`${int}\`%`,

            COMMAND_PAUSE_NAME: 'Pause',
            COMMAND_PAUSE_PAUSED: 'Music paused.',

            COMMAND_RESUME_NAME: 'Resume',
            COMMAND_RESUME_PLAYING: 'Music is not currently paused.',
            COMMAND_RESUME_RESUMED: 'Music resumed.',












            //under this line is shit pls dont scroll down








            HOLY_FUCK: 'holy fuck',
            FUCK: 'fuck',

















            COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,


            PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => {
                if (Array.isArray(prefix)) return new MessageEmbed()
                    .setTitle(`This guild's prefixes are: \`${prefix.join('\`, \`')}\``);
                else return new MessageEmbed()
                    .setTitle(`This guild's prefix is: \`${prefix}\``);
            },
            SETTING_GATEWAY_EXPECTS_GUILD: 'The parameter <Guild> expects either a Guild or a Guild Object.',
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
            SETTING_GATEWAY_SPECIFY_VALUE: 'You must specify the value to add or filter.',
            SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `The key ${key} is not an Array.`,
            SETTING_GATEWAY_KEY_NOEXT: (key) => `The key ${key} does not exist in the current data schema.`,
            SETTING_GATEWAY_INVALID_TYPE: 'The type parameter must be either add or remove.',
            SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece, value) => `${piece.key} doesn't accept the value: ${value}`,
            RESOLVER_MULTI_TOO_FEW: (name, min = 1) => `Provided too few ${name}s. At least ${min} ${min === 1 ? 'is' : 'are'} required.`,
            RESOLVER_INVALID_BOOL: (name) => `${name} must be true or false.`,
            RESOLVER_INVALID_CHANNEL: (name) => `${name} must be a channel tag or valid channel id.`,
            RESOLVER_INVALID_CUSTOM: (name, type) => `${name} must be a valid ${type}.`,
            RESOLVER_INVALID_DATE: (name) => `${name} must be a valid date.`,
            RESOLVER_INVALID_DURATION: (name) => `${name} must be a valid duration string.`,
            RESOLVER_INVALID_EMOJI: (name) => `${name} must be a custom emoji tag or valid emoji id.`,
            RESOLVER_INVALID_FLOAT: (name) => `${name} must be a valid number.`,
            RESOLVER_INVALID_GUILD: (name) => `${name} must be a valid guild id.`,
            RESOLVER_INVALID_INT: (name) => `${name} must be an integer.`,
            RESOLVER_INVALID_LITERAL: (name) => `Your option did not match the only possibility: ${name}`,
            RESOLVER_INVALID_MEMBER: (name) => `${name} must be a mention or valid user id.`,
            RESOLVER_INVALID_MESSAGE: (name) => `${name} must be a valid message id.`,
            RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
            RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} must follow this regex pattern \`${pattern}\`.`,
            RESOLVER_INVALID_ROLE: (name) => `${name} must be a role mention or role id.`,
            RESOLVER_INVALID_STRING: (name) => `${name} must be a valid string.`,
            RESOLVER_INVALID_TIME: (name) => `${name} must be a valid duration or date string.`,
            RESOLVER_INVALID_URL: (name) => `${name} must be a valid url.`,
            RESOLVER_INVALID_USER: (name) => `${name} must be a mention or valid user id.`,
            RESOLVER_STRING_SUFFIX: ' characters',
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
            REACTIONHANDLER_PROMPT: 'Which page would you like to jump to?',
            COMMANDMESSAGE_MISSING: 'Missing one or more required arguments after end of input.',
            COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} is a required argument.`,
            COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Missing a required option: (${possibles})`,
            COMMANDMESSAGE_NOMATCH: (possibles) => `Your option didn't match any of the possibilities: (${possibles})`,
            // eslint-disable-next-line max-len
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) => `${tag} | **${error}** | You have **${time}** seconds to respond to this prompt with a valid argument. Type **${abortOptions.join('**, **')}** to abort this prompt.`,
            // eslint-disable-next-line max-len
            MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) => `${tag} | **${name}** is a repeating argument | You have **${time}** seconds to respond to this prompt with additional valid arguments. Type **${cancelOptions.join('**, **')}** to cancel this prompt.`,
            MONITOR_COMMAND_HANDLER_ABORTED: 'Aborted',
            // eslint-disable-next-line max-len
            // INHIBITOR_COOLDOWN: (remaining, guildCooldown) => `${guildCooldown ? 'Someone has' : 'You have'} already used this command. You can use this command again in ${remaining} second${remaining === 1 ? '' : 's'}.`,
            // INHIBITOR_DISABLED_GUILD: 'This command has been disabled by an admin in this guild.',
            // INHIBITOR_DISABLED_GLOBAL: 'This command has been globally disabled by the bot owner.',
            // INHIBITOR_MISSING_BOT_PERMS: (missing) => `Insufficient permissions, missing: **${missing}**`,
            // INHIBITOR_NSFW: 'You can only use NSFW commands in NSFW channels.',
            // INHIBITOR_PERMISSIONS: 'You do not have permission to use this command.',
            INHIBITOR_REQUIRED_SETTINGS: (settings) => `The guild is missing the **${settings.join(', ')}** guild setting${settings.length !== 1 ? 's' : ''} and thus the command cannot run.`,
            // INHIBITOR_RUNIN: (types) => `This command is only available in ${types} channels.`,
            // INHIBITOR_RUNIN_NONE: (name) => `The ${name} command is not configured to run in any channel.`,
            // COMMAND_BLACKLIST_DESCRIPTION: 'Blacklists or un-blacklists users and guilds from the bot.',
            COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
                usersAdded.length ? `**Users Added**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
                usersRemoved.length ? `**Users Removed**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
                guildsAdded.length ? `**Guilds Added**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
                guildsRemoved.length ? `**Guilds Removed**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
            ].filter(val => val !== '').join('\n'),
            // COMMAND_EVAL_DESCRIPTION: 'Evaluates arbitrary Javascript. Reserved for bot owner.',
            COMMAND_EVAL_EXTENDEDHELP: [
                'The eval command evaluates code as-in, any error thrown from it will be handled.',
                'It also uses the flags feature. Write --silent, --depth=number or --async to customize the output.',
                'The --silent flag will make it output nothing.',
                "The --depth flag accepts a number, for example, --depth=2, to customize util.inspect's depth.",
                'The --async flag will wrap the code into an async function where you can enjoy the use of await, however, if you want to return something, you will need the return keyword.',
                'The --showHidden flag will enable the showHidden option in util.inspect.',
                'If the output is too large, it\'ll send the output as a file, or in the console if the bot does not have the ATTACH_FILES permission.'
            ].join('\n'),
            COMMAND_EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_SENDFILE: (time, type) => `Output was too long... sent the result as a file.\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_SENDCONSOLE: (time, type) => `Output was too long... sent the result to console.\n**Type**:${type}\n${time}`,
            COMMAND_UNLOAD: (type, name) => `✅ Unloaded ${type}: ${name}`,
            COMMAND_UNLOAD_DESCRIPTION: 'Unloads the klasa piece.',
            COMMAND_UNLOAD_WARN: 'You probably don\'t want to unload that, since you wouldn\'t be able to run any command to enable it again',
            COMMAND_TRANSFER_ERROR: '❌ That file has been transfered already or never existed.',
            COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Successfully transferred ${type}: ${name}.`,
            COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
            COMMAND_TRANSFER_DESCRIPTION: 'Transfers a core piece to its respective folder.',
            COMMAND_REBOOT: 'Rebooting...',
            // COMMAND_REBOOT_DESCRIPTION: 'Reboots the bot.',
            COMMAND_LOAD: (time, type, name) => `✅ Successfully loaded ${type}: ${name}. (Took: ${time})`,
            COMMAND_LOAD_FAIL: 'The file does not exist, or an error occurred while loading your file. Please check your console.',
            COMMAND_LOAD_ERROR: (type, name, error) => `❌ Failed to load ${type}: ${name}. Reason:${util.codeBlock('js', error)}`,
            COMMAND_LOAD_DESCRIPTION: 'Load a piece from your bot.',
            // COMMAND_PING: 'Ping?',
            // COMMAND_PING_DESCRIPTION: 'Runs a connection test to Discord.',
            COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
            COMMAND_INVITE: () => [
                `To add ${this.client.user.username} to your discord guild:`,
                `<${this.client.invite}>`,
                util.codeBlock('', [
                    'The above link is generated requesting the minimum permissions required to use every command currently.',
                    'I know not all permissions are right for every guild, so don\'t be afraid to uncheck any of the boxes.',
                    'If you try to use a command that requires more permissions than the bot is granted, it will let you know.'
                ].join(' ')),
                'Please file an issue at <https://github.com/dirigeants/klasa> if you find any bugs.'
            ],
            // COMMAND_INVITE_DESCRIPTION: 'Displays the invite link of the bot, to invite it to your guild.',
            COMMAND_INFO: [
                "Klasa is a 'plug-and-play' framework built on top of the Discord.js library.",
                'Most of the code is modularized, which allows developers to edit Klasa to suit their needs.',
                '',
                'Some features of Klasa include:',
                '• 🐇💨 Fast loading times with ES2017 support (`async`/`await`)',
                '• 🎚🎛 Per-client/guild/user settings that can be extended with your own fields',
                '• 💬 Customizable command system with automated parameter resolving and the ability to load/reload commands on-the-fly',
                '• 👀 "Monitors", which can watch messages and edits (for swear filters, spam protection, etc.)',
                '• ⛔ "Inhibitors", which can prevent commands from running based on any condition you wish to apply (for permissions, blacklists, etc.)',
                '• 🗄 "Providers", which simplify usage of any database of your choosing',
                '• ✅ "Finalizers", which run after successful commands (for logging, collecting stats, cleaning up responses, etc.)',
                '• ➕ "Extendables", which passively add methods, getters/setters, or static properties to existing Discord.js or Klasa classes',
                '• 🌐 "Languages", which allow you to localize your bot\'s responses',
                '• ⏲ "Tasks", which can be scheduled to run in the future, optionally repeating',
                '',
                'We hope to be a 100% customizable framework that can cater to all audiences. We do frequent updates and bugfixes when available.',
                "If you're interested in us, check us out at https://klasa.js.org"
            ],
            COMMAND_INFO_DESCRIPTION: 'Provides some information about this bot.',
            // COMMAND_HELP_DESCRIPTION: 'Display help for a command.',
            COMMAND_HELP_NO_EXTENDED: 'No extended help available.',
            COMMAND_HELP_DM: '📥 | The list of commands you have access to has been sent to your DMs.',
            COMMAND_HELP_NODM: '❌ | You have DMs disabled, I couldn\'t send you the commands in DMs.',
            COMMAND_HELP_USAGE: (usage) => `Usage :: ${usage}`,
            COMMAND_HELP_EXTENDED: 'Extended Help ::',
            COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
            COMMAND_ENABLE_DESCRIPTION: 'Re-enables or temporarily enables a command/inhibitor/monitor/finalizer. Default state restored on reboot.',
            COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
            COMMAND_DISABLE_DESCRIPTION: 'Re-disables or temporarily disables a command/inhibitor/monitor/finalizer/event. Default state restored on reboot.',
            COMMAND_DISABLE_WARN: 'You probably don\'t want to disable that, since you wouldn\'t be able to run any command to enable it again',
            COMMAND_CONF_NOKEY: 'You must provide a key',
            COMMAND_CONF_NOVALUE: 'You must provide a value',
            COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} may not be disabled.`,
            COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: 'This key is not array type. Use the action \'reset\' instead.',
            COMMAND_CONF_GET_NOEXT: (key) => `The key **${key}** does not seem to exist.`,
            COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
            // COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``,
            COMMAND_CONF_NOCHANGE: (key) => `The value for **${key}** was already that value.`,
            COMMAND_CONF_SERVER_DESCRIPTION: 'Define per-guild settings.',
            COMMAND_CONF_SERVER: (key, list) => `**Guild Settings${key}**\n${list}`,
            COMMAND_CONF_USER_DESCRIPTION: 'Define per-user settings.',
            COMMAND_CONF_USER: (key, list) => `**User Settings${key}**\n${list}`,
            COMMAND_STATS: (memUsage, uptime, users, guilds, channels, klasaVersion, discordVersion, processVersion, message) => [
                '= STATISTICS =',
                '',
                `• Mem Usage  :: ${memUsage} MB`,
                `• Uptime     :: ${uptime}`,
                `• Users      :: ${users}`,
                `• Guilds     :: ${guilds}`,
                `• Channels   :: ${channels}`,
                `• Klasa      :: v${klasaVersion}`,
                `• Discord.js :: v${discordVersion}`,
                `• Node.js    :: ${processVersion}`,
                `• Shard      :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${this.client.options.totalShardCount}`
            ],
            COMMAND_STATS_DESCRIPTION: 'Provides some details about the bot and stats.',
            MESSAGE_PROMPT_TIMEOUT: 'The prompt has timed out.',
            TEXT_PROMPT_ABORT_OPTIONS: ['abort', 'stop', 'cancel']
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