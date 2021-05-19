const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const botconfig = require('../../../json/botconfig.json');
module.exports = {
	name: 'savewords',
	aliases: [
		'Savewords',
		'SAVEWORDS',
		'SaveWords',
		'saveWords',
		'saySave',
		'saysave',
		'SaySave',
		'SAYSAVE'
	],
	description: '8Ball for luck and fun!',
	catergory: 'Random',
	usage: 'Question',
	run: (bot, message, args) => {
		let savewords = JSON.parse(
			fs.readFileSync('./json/savewords.json', 'utf8')
		);

		let saveEmbed = new MessageEmbed ()
			.setColor('#609099')
			.setTitle('IT IS:')
			.setDescription(`${savewords[message.author.id].savewords}`)
			.setFooter(
				'Heyo, thanks for using this trick! (this can be used for magic tricksss)'
			);

		message.channel.send(saveEmbed);
	}
};
