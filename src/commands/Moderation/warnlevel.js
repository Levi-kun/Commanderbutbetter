const { MessageEmbed } = require('discord.js');

let warnss = require('../../../json/warnings.json');
module.exports = {
	name: 'warnlevel',
	aliases: ['Warnlevel', 'Wlevel', 'WLevel', 'WLEVEL'],
	description: 'Check the warn level of other people!',
	catergory: 'Moderation',
	usage: 'warnlevel <user>',
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('KICK_MEMBERS')) {
			let embed = new MessageEmbed()
				.setAuthor(message.author.username)
				.setTitle('Insufficient Permission')
				.setColor('RANDOM')
				.addField('Permission needed', perm);
			//Now lets send our embed. but we would like to delete it.......
			//so now lets do this um ya
			message.channel.send(embed).then((msg) => message.delete(5000));
		}

		let wUserEmbed = new MessageEmbed().setTitle(`Couldn't find them yo`);

		let wUser =
			message.guild.member(message.mentions.users.first()) ||
			message.guild.members.fetch(args[0]);
		if (!wUser) return message.channel.send(wUserEmbed);
		let warnlevel = warnss[wUser.id].warns;

		let wuserembedthatsofrlevels = new MessageEmbed().setTitle(
			`<@${wUser.id}> has a ${warnlevel} warnings`
		);
		message.reply(wuserembedthatsofrlevels);
	}
};
