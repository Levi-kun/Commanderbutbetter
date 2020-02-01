const { RichEmbed } = require('discord.js');
const { noPerms } = require('../../utils/errors.js');
module.exports = {
	name: 'RemoveRole',
	aliases: ['removerole', 'Removerole', 'REMOVEROLL'],
	description: 'Remove Roles from other users!',
	catergory: 'Moderation',
	usage: 'Removerole <user> <role>',
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('MANAGE_ROLES'))
			return noPerms(message, 'MANAGE_SERVERS');

		let rMember =
			message.guild.member(message.mentions.users.first()) ||
			message.guild.members.get(args[0]);
		if (!rMember) return message.reply("Couldn't find that user, yo.");
		let role = args[1];
		if (!role) return message.reply('Specify a role!');

		console.log(role);
		let gRole = message.guild.roles.find(`name`, role);
		if (!gRole) return message.reply("Couldn't find that role.");
		if (!rMember.roles.has(gRole.id))
			return message.reply("They don't have that role.");
		await rMember.removeRole(gRole.id);

		let uPic = rMember.displayAvatarURL;
		let theyalreadyhavethat = new RichEmbed().setTitle(
			`They already have that role! ${message.author.tag}`
		);

		let RemoveRole = new RichEmbed()
			.setTitle(`You lost a role! <!${rMember.id}>`)
			.addField('Role', `${gRole.name}`)
			.setThumbnail(uPic)
			.setColor(0x41ff00);

		try {
			await rMember.send(RemoveRole);
		} catch (e) {
			return;
		}
	}
};
