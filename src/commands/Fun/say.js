const { noPerms } = require(`../../utils/errors.js`);

module.exports = {
	name: 'say',
	aliases: 'Say',
	description: 'makes the bot say anything',
	usage: 'Message',
	catergory: null,
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('MANAGE_MESSAGES'))
			return noPerms(message, 'MANAGE_MESSAGES');
		const sayMessage = args.join(' ');
		message.delete().catch();
		message.channel.send(sayMessage);
	}
};
