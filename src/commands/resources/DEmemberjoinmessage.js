
const { RichEmbed } = require('discord.js');
const { readdirSync, readFileSync } = require('fs');
const botconfig = require('../../../json/botconfig.json');

module.exports = {
	name: 'memberjoinmessage',
	aliases: ['mjm', 'memberjm', 'mjmessage'],
	description: 'enable or disable the member join message!',
	usage: '[No args]',
	catergory: 'resources',
	run: (bot, message, args) => {
		let prefixes = JSON.parse(
			readFileSync('./json/prefixes.json', 'utf8')
		);
		if (!prefixes[message.guild.id]) {
			prefixes[message.guild.id] = {
				prefixes: botconfig.prefix
			};
		}

		let prefix = prefixes[message.guild.id].prefixes;

		var grabGuildRow = bot.getGuild.get(message.guild.id);

		if (!grabGuildRow) {
			return message.channel.send(`
            Has not started the setup\n To start setup just type in:\n${prefix}setupserver
            `);
		}

		let firstEmbedtoinform = new RichEmbed().setTitle(
			`Do you want to enable or disable the member join message? \n\`TRUE\`  or \`FALSE\``
		);

		const filter = (m) =>
			m.author.id === message.guild.ownerID;
		message.channel.send(firstEmbedtoinform);
		message.channel
			.awaitMessages(filter, {
				max: 1,
				time: 30000,
				errors: ['time']
			})
			.then((collected) => {
				collected.delete(10000);
				if (collected.first().content === 'cancel') {
					return message.channel.send('Canceled.');
				}

				class collectedUppercase {
					constructor(collectednew) {
						this.collection = collectednew.toUpperCase();
					}
					present() {
						return this.collection;
					}
				}
				let loweredcollection;
				loweredcollection = new collectedUppercase( collected.first().content );

				grabGuildRow = {showmemberjoin: loweredcollection.collection};
				bot.showMemberjoin.run(grabGuildRow);
				
				let showMemberjoinEmbed = new RichEmbed()
					.setTitle(`${grabGuildRow.showmemberjoin}`)
					.setColor(botconfig.green)
					.setAuthor(message.author.username)
					.setDescription(
						`Saved!`
					);

				message.channel.send(showMemberjoinEmbed);
			});
		
	}
};
