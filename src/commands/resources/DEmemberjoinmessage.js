const SQLite = require('better-sqlite3');
const guildsql = new SQLite('./guild.sqlite');
const { RichEmbed } = require('discord.js');
const { readdirSync, readFileSync } = require('fs');
const botconfig = require('../../../json/botconfig.json');

module.exports = {
	name: 'memberjoinmessage',
	aliases: ['mjm', 'memberjm', 'mjmessage'],
	description: 'enable or disable the member join message!',
	usage: '[TRUE, FALSE]',
	catergory: 'resources',
	run: (bot, message, args) => {
		if(!args[0]) return message.channel.send(`Incorrect \`Usage\`! do \`mjm [TRUE / FALSE]\``)
		// message.channel.send(`I'll do this command later! sorry but I'm a bit too buzy of at the moment`)
		let eodEmbed = new RichEmbed ()
		.setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
		let guildd = bot.getGuild.get(message.guild.id)
		if (args[0].toLowerCase() === 'true') {
		guildd = {

			showmemberjoin: 1

		};
		
		eodEmbed.setTitle(`Saved! \nTRUE:${guildd.showmemberjoin}`)
		bot.sMemberjoin.run(guildd, message.guild.id);
		console.log({guildd})
		}
		if (args[0].toLowerCase() === 'false') {
			guildd = {
				
				showmemberjoin: 0
				
			};
			eodEmbed.setTitle(`Saved! \n FALSE:${guildd.showmemberjoin}`)
			bot.sMemberjoin.run(guildd, message.guild.id);
			console.log({guildd})
			}

			message.channel.send(eodEmbed)
	}
};
