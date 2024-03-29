const { MessageEmbed } = require('discord.js');
const {
	noPerms,
	equalPerms
} = require('../../utils/errors.js');

module.exports = {
	name: 'kick',
	aliases: ['Kick', 'Kicked', 'kicked'],
	description: '8Ball for luck and fun!',
	catergory: 'Moderation',
	usage: 'kick <user>',
	run: async (bot, message, args) => {
		let kUser = message.guild.member(
			message.mentions.users.first() ||
				message.guild.members.fetch(args[0])
		);
		if (!kUser)
			return message.channel.send("Can't find user!");
		let kReason = args.join(' ').slice(22);

		if (!message.member.hasPermission('KICK_MEMBERS'))
			return noPerms(message, 'KICK_MEMBERS');
			if(!bot.member.hasPermission) return message.channel.send(`I don't have perms!`)
		if (kUser.hasPermission('KICK_MEMBERS'))
			return equalPerms(message, 'KICK_MEMBERS');

		let kickEmbed = new MessageEmbed()
			.setDescription('~Kick~')
			.setColor('#e56b00')
			.addField(
				'Kicked User',
				`${kUser} with ID ${kUser.id}`
			)
			.addField(
				'Kicked By',
				`<@${message.author.id}> with ID ${message.author.id}`
			)
			.addField('Kicked In', message.channel)
			.addField('Tiime', message.createdAt)
			.addField('Reason', kReason || 'no reason');
		let grabreportchannel = bot.getGuild.get(message.guild.id)
		let kickChannel = message.guild.channels.find(
			`name`,
			grabreportchannel.report
		);
		if (!kickChannel) {
			let cool = await message.channel.send(
				"Can't find incidents channel."
			);
			message.guild.member(kUser).kick(kReason)
			message.channel.send(kickEmbed)
			timeout(cool.delete, 5000)
			}
		message.guild.member(kUser).kick(kReason);
		kickChannel.send(kickEmbed);
	}
};
