const { MessageEmbed } = require('discord.js');
const botconfig = require('../../../json/botconfig.json');
module.exports = {
	name: 'owner',
	aliases: ['Owner', 'OWNER'],
	description: '8Ball for luck and fun!',
	catergory: 'resources',
	usage: 'Question',
	run: (bot, message, args) => {
		let spag = message.author.id;
		let rag = botconfig.botowner;

		let sensai = new MessageEmbed().setTitle('Sensai! Give me more code!');

		let nosensai = new MessageEmbed()
			.setTitle('Your not the owner')
			.addField("Who's the Owner?", 'Levi Chan#3508 is the owner!');

		if (rag === spag) {
			message.channel.send(sensai);
		}

		if (!rag === spag) {
			message.channel.send(nosensai);
		}
	}
};
