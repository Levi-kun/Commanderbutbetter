const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
	name: 'hug',
	aliases: ['Hug', 'Hugs', 'hugs'],
	description: 'You can hug anyone!',
	catergory: 'Fun',
	usage: '[User]',
	run: async (bot, message, args) => {
		let hugUser = message.guild.member(
			message.mentions.users.first() || message.guild.members.get(args[0])
		);
		if (!hugUser) return message.channel.send('So your huggin your self?');
		const { body } = await superagent.get(`https://nekos.life/api/v2/img/hug`);

		let hugEmbed = new Discord.RichEmbed()
			.setTitle('Hug `__(*^*__)_` ')
			.setDescription(`**${message.author.username}** hugged ***${hugUser}***!`)
			.setImage(body.url)
			.setColor('RANDOM');

		message.channel.send(hugEmbed);
	}
};
