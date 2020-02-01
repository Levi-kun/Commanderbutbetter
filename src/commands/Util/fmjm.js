module.exports = {
	name: 'gmjm',
	aliases: ['grabmemberjoinmessage'],
	description: 'Recreates the guild create event',
	catergory: 'Util',
	usage: 'none',
	OwnerRequired: true,
	run: async (bot, message, args) => {
		let rightyourokay = bot.getGuild.get(`${message.guild.id}`);

		message.channel.send(`${rightyourokay.showmemberjoin}`);
	}
};
