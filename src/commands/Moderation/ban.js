const { RichEmbed } = require('discord.js');
const { noPerms , equalPerms} = require('../../utils/errors.js');
module.exports = {
	name: 'ban',
	aliases: ['Ban', 'Bans', 'bans'],
	description: '8Ball for luck and fun!',
	catergory: 'Moderation',
	usage: 'ban <user>',
	run: (bot, message, args) => {
		if (!message.member.hasPermission('BAN_MEMBERS'))
			return noPerms(message, 'BAN_MEMBERS');

		let bUser = message.guild.member(
			message.mentions.users.first() || message.guild.members.get(args[0])
		);
		if (!bUser) return message.channel.send("Can't find user!");
		let bReason = args.join(' ').slice(22);
		if (!message.member.hasPermission('MANAGE_MEMBERS'))
			return noPerms(message, 'MANAGE_MEMBERS');
		if (bUser.hasPermission('MANAGE_MEMBERS'))
			return equalPerms(message, 'MANAGE_MEMBERS');

		let cantfindher = new RichEmbed().setTitle("Can't find incidents channel.");

		let banEmbed = new RichEmbed()
			.setDescription('~Ban~')
			.setColor('#bc0000')
			.addField('Banned User', `${bUser} with ID ${bUser.id}`)
			.addField(
				'Banned By',
				`<@${message.author.id}> with ID ${message.author.id}`
			)
			.addField('Banned In', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', bReason);

		let incidentchannel = message.guild.channels.find(`name`, 'me');
		if (!incidentchannel) return message.channel.send(cantfindher);
		message.guild.member(bUser).ban(bReason);
		incidentchannel.send(banEmbed);
	}
};
