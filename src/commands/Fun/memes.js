const { RichEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
	name: 'Meme',
	aliases: ['meme', 'memes', 'Memes'],
	description: '8Ball for luck and fun!',
	usage: 'Question',
	catergory: 'Fun',
	run: (bot, message, args) => {
		randomPuppy('memes').then((url) => {
			const embed = new RichEmbed()
				.setTitle('MEME!')
				.setImage(url)
				.setColor('RANDOM');
			message.channel.send(embed);
		});
	}
};
