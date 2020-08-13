const { Command, Stopwatch } = require('klasa');
const { MessageEmbed } = require('discord.js');
const { exec } = require('child_process');
const { stdout, stderr } = require('process');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_EXEC_DESCRIPTION'),
            runIn: ['text', 'dm'],
            deletable: true,
            aliases: ['ex'],
            permissionLevel: 9,
            extendedHelp: 'No extended help available.',
            // usage: '<user>'
            // usage: '<command>'
        });
    }

    async run(message) {
        if (!message.author.settings.owner.active) {
            let noPermsEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('NO_BOT_PERMS'))
                .setColor('#ff0000')
                .setFooter(`${message.language.get('COMMAND_REBOOT_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noPermsEmbed)
        }

        if (!message.args[0]) {
            let noArgsEmbed = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setTitle(message.language.get('COMMAND_EXEC_NO_ARGS'))
                .setColor(message.member.displayHexColor)
                .setFooter(`${message.language.get('COMMAND_EXEC_NAME')} | Developed By MILLION#1321`)
                .setTimestamp()
            return message.sendMessage(noArgsEmbed)
        }

        exec(message.args.join(' '), (err, stdout, stderr) => {
            if (err) {
                let errEmbed = new MessageEmbed()
                    .setAuthor(this.client.user.tag, this.client.user.avatarURL())
                    .setColor("#ff0000")
                    .setTitle(message.language.get('COMMAND_EXEC_ERR'))
                    .setDescription(`\`\`\`${err}\`\`\``)
                    .setFooter(`${message.language.get('COMMAND_EXEC_NAME')} | Developed By MILLION#1321`)
                return message.sendMessage(errEmbed)
            }
            if (stderr) {
                let stderrEmbed = new MessageEmbed()
                    .setAuthor(this.client.user.tag, this.client.user.avatarURL())
                    .setColor("#ff0000")
                    .setTitle(message.language.get('COMMAND_EXEC_ERR'))
                    .setDescription(`\`\`\`${stderr}\`\`\``)
                    .setFooter(`${message.language.get('COMMAND_EXEC_NAME')} | Developed By MILLION#1321`)
                return message.sendMessage(stderrEmbed).catch(e => {
                    this.client.logger.log(e);
                });
            }
            if (stdout.length == 0) stdout = 'No Output From Command'
            let execEmbed = new MessageEmbed()
                .setAuthor(this.client.user.tag, this.client.user.avatarURL())
                .setColor("#32a852")
                .setTitle(message.language.get('COMMAND_EXEC_SUCC'))
                .setDescription(`\`\`\`${stdout}\`\`\``)
                .setFooter(`${message.language.get('COMMAND_EXEC_NAME')} | Developed By MILLION#1321`)
            return message.sendMessage(execEmbed).catch((e) => {
                let execErrEmbed = new MessageEmbed()
                    .setAuthor(this.client.user.tag, this.client.user.avatarURL())
                    .setColor("#ff0000")
                    .setTitle(message.language.get('COMMAND_EXEC_ERR'))
                    .setDescription(`\`\`\`${e}\`\`\``)
                    .setFooter(`${message.language.get('COMMAND_EXEC_NAME')} | Developed By MILLION#1321`)
                return message.sendMessage(execErrEmbed).catch(e => {
                    this.client.logger.log(e);
                });
            })
        })
    }

};
