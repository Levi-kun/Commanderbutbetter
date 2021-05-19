const { MessageEmbed } = require('discord.js');
const { noPerms } = require('../../utils/errors.js');
//

//
module.exports = {
	name: 'purge',
	aliases: ['Purge', 'PURGE'],
	description: 'Pure the channel for glory!',
	catergory: 'Moderation',
	usage: 'Question',
	run: (bot, message, args) => {
		let noargs = new MessageEmbed().setTitle(
			'How many messages do you want deleted?'
		);

		let deletedmessages = new MessageEmbed().setTitle(
			`Cleared ${args[0]} messages!`
		);

		let oldmessage = new MessageEmbed()
			.setTitle('The messages are way too old')
			.setColor(0xff0000);

		if (
			!message.member.hasPermission(
				'MANAGE_GUILD' ||
				'MANAGE_CHANNELS' ||
				'MANAGE_MESSAGES'
			)
		)
			return noPerms(message, 'MANAGE_MESSAGES');

		if (!args[0]) return message.channel.send(noargs);
		message.channel
			.bulkDelete(args[0])
			.then(() => {
				message.channel
					.send(deletedmessages)
					.then((msg) => msg.delete(10000));
			})
			.catch((error) => {
				message.channel
					.send(oldmessage)
					.then((msg) => msg.delete(10000));
			});
	}
};
