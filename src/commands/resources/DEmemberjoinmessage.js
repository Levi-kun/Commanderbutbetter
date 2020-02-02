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
		message.channel.send(`I'll do this command later! sorry but I'm a bit too buzy of at the moment`)
	}
};
