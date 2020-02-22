const { RichEmbed } = require('discord.js');
const botconfig = require(`../../../json/botconfig.json`);
const tokenfile = require(`../../../token.json`);
module.exports = {
	name: 'restart',
	aliases: ['Restart', 'RESTART'],
	description: 'Restarts the bot',
	catergory: 'Util',
	usage: 'none',
	OwnerRequired: true,

	run: async (bot, message, args) => {
		console.log(`aight Imma head out and back ${message.author.username}`);

		try {
			let immaheadout = new RichEmbed()
				.setColor('RANDOM')
				.setTitle(`brb`)
				.setTimestamp();

			let aight = await message.channel.send(immaheadout);
			//
			setTimeout(() => {
				bot.destroy();
			}, 100);
			setTimeout(() => {
				bot.login(tokenfile.token);
			}, 2000);
			let immabebackjkialreadyam = new RichEmbed()
				.setColor(botconfig.green)
				.setTitle(`Aight back`)
				.setTimestamp();

			setTimeout(() => {
				aight.edit(immabebackjkialreadyam);
			}, 2001);

			//
		} catch (e) {
			//
			let eMessage = new RichEmbed()
				.setTitle(`Err`)
				.setAuthor(`Bot`)
				.setDescription(e.message)
				.setColor(botconfig.red);
			/*



      */
			message.channel.send(eMessage);
		}
	}
};
