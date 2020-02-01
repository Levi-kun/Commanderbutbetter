const { RichEmbed } = require('discord.js');
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
		let noargs = new RichEmbed().setTitle(
			'How many messages do you want deleted?'
		);

		let deletedmessages = new RichEmbed().setTitle(
			`Cleared ${args[0]} messages!`
		);

		let oldmessage = new RichEmbed()
			.setTitle('The messages are way too old')
			.setColor(0xff0000);

		if (!message.member.hasPermission('MANAGE_GUILD'))
			return noPerms(message, 'MANAGE_GUILD');

		if (!args[0]) return message.channel.send(noargs);
		message.channel
			.bulkDelete(args[0])
			.then(() => {
				message.channel.send(deletedmessages).then((msg) => msg.delete(10000));
			})
			.catch((error) => {
				message.channel.send(oldmessage).then((msg) => msg.delete(10000));
			});
	}
};
