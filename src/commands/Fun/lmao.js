const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'lmao',
	aliases: ['LMAO', 'LMAOOOO', 'MLAO'],
	description: 'LMAOOO. funny!',
	usage: 'Question',
	catergory: 'Fun',
	run: async (bot, message, args) => {
		let what = new MessageEmbed().setTitle(`What was teh joke?`);

		if (!args[0]) return message.channel.send(what);
		let replies = ['LMAOOOO.', 'Wat.'];

		let result = Math.floor(Math.random() * replies.length);
		let quetion = args.slice(0).join(' ');

		let roflEmbed = new MessageEmbed()
			.setTitle(replies[result])
			.setColor('RANDOM')


		message.channel.send(roflEmbed).then((msg) => msg.delete(10000));
	}
};
