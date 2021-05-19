const { noPerms } = require(`../../utils/errors.js`);

module.exports = {
	name: 'say',
	aliases: 'Say',
	description: 'makes the bot say anything',
	usage: 'Message',
	catergory: 'Fun',
	run: async (bot, message, args) => {
		const sayMessage = args.join(' ');
		message.delete().catch();
		message.channel.send(sayMessage);
	}
};
