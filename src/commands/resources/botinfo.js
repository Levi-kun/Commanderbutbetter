const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'botinfo',
	aliases: ['Botinfo', 'informationbot', 'robotinfo'],
	description: 'learn about the bot from the bot!',
	usage: '[No args]',
	catergory: 'resources',
	run: (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL;
		let botembed = new RichEmbed()
			.setDescription('Bot Information')
			.setColor('#15f153')
			.setThumbnail(bicon)
			.addField('Bot Name', bot.user.username)
			.addField('Created On', bot.user.createdAt);

		message.channel.send(botembed);
	}
};
