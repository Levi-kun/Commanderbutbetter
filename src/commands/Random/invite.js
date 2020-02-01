let invite =
	'https://discordapp.com/api/oauth2/authorize?client_id=464147356582019082&permissions=8&scope=bot';
const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'invite',
	aliases: ['Invite', 'INVITE'],
	description: 'Invite Your Friends!',
	cooldown: 10,
	catergory: 'resources',
	usage: '[no usage needed]',
	run: async (bot, message, args) => {
		let Alerted = new RichEmbed()
			.setTitle(`Thanks for your interest with my bot!`)
			.setDescription(invite);

		message.channel.send(Alerted);
	}
};
