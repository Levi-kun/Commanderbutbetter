const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');
const { MessageEmbed, Collection } = require('discord.js');
let botconfig = require(`../../../json/botconfig.json`);
module.exports = {
	name: 'upvote',
	aliases: ['Upvote', 'UPVOTE'],
	description: 'Upvote a user!',
	catergory: 'Points',
	cooldown: 10,
	usage: 'upvote user',
	run: async (bot, message, args) => {
		let score;
		if (message.guild) {
			score = bot.getScore.get(message.author.id, message.guild.id);
			if (!score) {
				score = {
					id: `${message.guild.id}-${message.author.id}`,
					user: message.author.id,
					username: message.author.username,
					guild: message.guild.id,
					points: 0,
					reputation: 0
				};

				//
			}
		}
		let uUser = message.guild.member(
			message.mentions.users.first() ||
				message.guild.members.get(args[0])
		);
		let noUserFound = new MessageAttachment()
			.setTitle(`Can't Find User!`)
			.setDescription(`${message.author.username}`)
			.setColor(botconfig.red)
			.setTimestamp();
		//
		//
		if (!uUser) return message.channel.send(noUserFound);
		if (uUser.id === message.author.id) {
			return message.channel.send(
				`${message.author.toString()}! You can't do that!`
			);
		}
		if (uUser.bot === true)
			return message.channel.send(
				`That's not how it works bud.\n\`Don't @ a bot\``
			);
		const twelvehours = bot.twelvehoursupvote;
		if (!twelvehours.has(message.author.id)) {
			twelvehours.set(message.author.id, new Collection());
		}
		const now = Date.now();
		const handler = twelvehours.get(message.author.id);
		const cooldownAmount = 43200000;
		if (handler.has(message.author.id)) {
			const expireTime =
				handler.get(message.author.id) + cooldownAmount;
			const timeLeft = (expireTime - now) / 1000;
			//
			let coolDownEmbed = new MessageAttachment()
				.setTitle(`Cooldown`)
				.setAuthor(
					`${message.author.username}`,
					message.author.avatarURL
				)
				.setColor(botconfig.red)
				.addField(`WAIT`, timeLeft.toFixed(1), true)
				.setFooter(`\*\*${message.author.username}\*\*`, message.author.displayAvatarURL())
				.setTimestamp();

			if (now < expireTime) {
				return message.channel.send(coolDownEmbed).catch(e => {

					console.log(e)

					message.channel.send(`\`do I have embed perms?\`\`\nbtw you have ${timeLeft.toFixed(1)}`)

				});
			}
		}
		handler.set(message.author.id, now);
		setTimeout(
			() => handler.delete(message.author.id),
			cooldownAmount
		);
		// Limited to guild owner - adjust to your own preference!

		const pointsToAdd = 1;

		// Get their current points.
		let userscore = bot.getScore.get(uUser.id, message.guild.id);
		// It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
		if (!userscore) {
			userscore = {
				id: `${message.guild.id}-${uUser.id}`,
				user: uUser.id,
				username: uUser.user.username,
				guild: message.guild.id,
				points: 0,
				reputation: 1
			};
		}
		userscore.points += pointsToAdd;

		// We also want to update their level (but we won't notify them if it changes)
		let userRep = Math.floor(
			botconfig.levelPoint * Math.sqrt(score.points)
		);
		userscore.reputation = userRep;

		// And we save it!

		/* --------- */
		// ! CAPSULE !
		// ? JK ?
		bot.setScore.run(userscore);
		// ? JK ?
		// ! CAPSULE !
		/* --------- */

		let uUserPic = uUser.avatarURL;
		let recivedEmbed = new MessageAttachment()
			.setTitle(`UPVOTED`)
			.setColor(botconfig.purple)
			.setImage(uUserPic)
			.addField(
				`> \`${uUser.user.username}\` <`,
				`${pointsToAdd} points and now sittiting at\n\` ${userscore.points}\` points.`
			);
		message.channel.send(recivedEmbed);
		// done o:
	}
};
