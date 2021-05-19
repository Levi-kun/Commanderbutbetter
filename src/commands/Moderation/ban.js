const { MessageEmbed } = require('discord.js');
const { noPerms, equalPerms } = require('../../utils/errors.js');
module.exports = {
	name: 'ban',
	aliases: ['Ban', 'Bans', 'bans'],
	description: '8Ball for luck and fun!',
	catergory: 'Moderation',
	usage: 'ban <user>',
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('BAN_MEMBERS'))
			return noPerms(message, 'BAN_MEMBERS');

		let bUser = message.guild.member(
			message.mentions.users.first() ||
				message.guild.members.fetch(args[0])
		);
		if (!bUser) return message.channel.send("Can't find user!");
		let bReason = args.join(' ').slice(22);

		if (bUser.hasPermission('BAN_MEMBERS'))
			return equalPerms(message, 'BAN_MEMBERS');

		let cantfindher = new MessageEmbed().setTitle(
			"Can't find incidents channel."
		);

		let banEmbed = new MessageEmbed()
			.setDescription('~Ban~')
			.setColor('#bc0000')
			.addField('Banned User', `${bUser} with ID ${bUser.id}`)
			.addField(
				'Banned By',
				`<@${message.author.id}> with ID ${message.author.id}`
			)
			.addField('Banned In', message.channel)
			.addField('Time', message.createdAt)
			.addField('Reason', bReason || 'no reason');
		let grabChannel = bot.getGuild.get(message.guild.id);
		let incidentchannel = message.guild.channels.cache.get(
			`name`,
			grabChannel.report
		);

			


		if (!incidentchannel)  { 
			
		let cantfindhermmsg = await message.channel.send(cantfindher)
			cantfindhermmsg.channel.send(banEmbed)
			
			message.guild.member(bUser).ban(bReason)
			timeout(cantfindhermmsg.delete(),5000)


			return;
		}
		message.guild.member(bUser).ban(bReason);
		incidentchannel.send(banEmbed);
	}
};
