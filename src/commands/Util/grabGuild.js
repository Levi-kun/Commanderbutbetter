const { RichEmbed } = require(`discord.js`);
let botconfig = require(`../../../json/botconfig.json`);
const SQLite = require('better-sqlite3');
const guildsql = new SQLite('./guild.sqlite');

module.exports = {
	name: 'grabguild',
	description: 'grabguild util a bot command!',
	usage: 'reload <command>',
	catergory: 'Util',
	OwnerRequired: true,
	aliases: ['gg'],
	run: async (bot, message, args) => {
		let rightyourokay = bot.getGuild.get(`${message.guild.id}`);

		message.channel.send(rightyourokay.tags1);
		message.channel.send(rightyourokay.tags2);
		message.channel.send(rightyourokay.general);
		message.channel.send(rightyourokay.report);
		message.channel.send(rightyourokay.showmemberjoin);
	}
};
