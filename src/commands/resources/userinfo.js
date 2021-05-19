const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'userinfo',
	aliases: ['Userinfo', 'UserInfo', 'userInfo'],
	description: '8Ball for luck and fun!',
	usage: 'Question',
	catergory: 'resources',
	run: (bot, message, args) => {
		var time = Date.now();
		let userinfoUser = message.guild.member(
			message.mentions.users.first() ||
				message.guild.members.get(args[0])
		);
		let uPic = message.author.displayAvatarURL;
		let userEmbed = new MessageEmbed();
		let Nicknames;

		if (
			message.member.displayName === message.author.username
		) {
			Nicknames = 'None';
		} else {
			Nicknames = message.member.displayName;
		}

		if (userinfoUser) {
			if (userinfoUser.user.bot) return;
			if (
				userinfoUser.displayName ===
				userinfoUser.user.username
			) {
				Nicknames = 'None';
			} else {
				Nicknames = message.member.displayName;
			}
			let refuPic = userinfoUser.user.displayAvatarURL;
			userEmbed
				.setColor('#495963')
				.setThumbnail(refuPic)
				.setAuthor(`${userinfoUser.user.username}:`)
				.addField(
					'`Name`',
					userinfoUser.user.username,
					true
				)
				.addField('`Nickname`', Nicknames, true)
				.addField(
					'`Status`',
					userinfoUser.user.presence.status,
					true
				)
				.addField(
					'`Highest Role`',
					userinfoUser.highestRole
				)
				.addField(
					'`Joined Discord`',
					userinfoUser.user.createdAt
				)
				.addField('`Joined At`', userinfoUser.joinedAt);
		} else {
			userEmbed
				.setColor('#495963')
				.setThumbnail(uPic)
				.setAuthor(`${message.author.username}:`)
				.addField('`Name`', message.author.username, true)
				.addField('`Nickname`', Nicknames, true)
				.addField(
					'`Status`',
					message.author.presence.status,
					true
				)
				.addField(
					'`Highest Role`',
					message.member.highestRole
				)
				.addField(
					'`Joined Discord`',
					message.author.createdAt
				)
				.addField('`Joined At`', message.member.joinedAt);
		}
		message.channel.send(userEmbed);
	}
};
