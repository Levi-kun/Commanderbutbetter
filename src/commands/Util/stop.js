const { RichEmbed } = require('discord.js');
const botconfig = require(`../../../json/botconfig.json`);
module.exports = {
	name: 'Stop',
	aliases: ['stop', 'STOP'],
	description: 'Stops the bot',
	catergory: 'Util',
	usage: 'none',
	OwnerRequired: true,
	run: async (bot, message, args) => {
		console.log(`aight Imma head out ${message.author.username}`);

		try {
			let immaheadout = new RichEmbed()
				.setColor('RANDOM')
				.setTitle(`aight Imma head out`);
			message.channel.send(immaheadout);
			//
			setTimeout(() => {
				bot.destroy();
			}, 4000);
			//
			setTimeout(() => {
				process.exit();
			}, 4000);

			//
		} catch (e) {
			//
			let eMessage = new RichEmbed()
				.setTitle(`Err`)
				.setAuthor(`Bot`)
				.setDescription(e.message)
				.setColor(botconfig.red);

			message.channel.send(eMessage);
		}
	}
};
