const Discord = require('discord.js');
const ms = require('ms');
const { noPerms } = require('../../utils/errors.js');

/*

The world zychoo

*/

module.exports = {
	name: 'tempmute',
	aliases: ['tmute', 'Tmute', 'TMUTE', 'TMute', 'TempMute', 'Tempmute'],
	description: 'Mute people on a timer!',
	catergory: 'Moderation',
	usage: 'Question',
	run: async (bot, message, args) => {
		if (!message.member.hasPermission('KICK_MEMBERS'))
			return noPerms(message, 'KICK_MEMBERS');

		let muute = new Discord.RichEmbed()
			.setTitle("CAN'T MUTE THEM!")
			.addField('User', `${message.author.username}`);

		let count = new Discord.RichEmbed()
			.setTitle("Couldn't find the user!")
			.setDescription(`User, ${tomute} couldn't get muted!`);

		let tomute = message.guild.member(
			message.mentions.users.first() || message.guild.members.get(args[0])
		);
		if (!tomute) return message.reply(count);
		if (tomute.hasPermission('MANAGE_MESSAGES')) return noPerms(muute);
		let muterole = message.guild.roles.find(`name`, 'muted');

		if (!muterole) {
			try {
				muterole = await message.guild.createRole({
					name: 'muted',
					color: '#000000',
					permissions: []
				});
				message.guild.channels.forEach(async (channel, id) => {
					await channel.overwritePermissions(muterole, {
						SEND_MESSAGES: false,
						ADD_REACTIONS: false
					});
				});
			} catch (e) {
				console.log(e.stack);
			}
		}

		let mutetimeregerts = new Discord.RichEmbed().setTitle(
			"You didn't specify a time!"
		);

		let mutedembed = new Discord.RichEmbed().setTitle(
			`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`
		);

		let alertembed = new Discord.RichEmbed().setTitle(
			`<@${tomute.id}> has been unmuted!`
		);

		let mutetime = args[1];
		if (!mutetime) return message.reply(mutetimeregerts);

		await tomute.addRole(muterole.id);
		message.reply(mutedembed);

		setTimeout(function() {
			tomute.removeRole(muterole.id);
			message.channel.send(`<@${tomute.id}> has been unmuted!`);
		}, ms(mutetime));
	}
};
