const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');
const { MessageEmbed } = require('discord.js');
let botconifg = require(`../../../json/botconfig.json`);

module.exports = {
	name: 'leaderboard',
	aliases: ['Leaderboard', 'LEADERBOARD'],
	description: 'Find the top 10 of your sever!',
	catergory: 'Points',
	usage: 'no usage',
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
					reputation: 0,
				};
			}
		}

		let top10 = bot.setTopScore.all(message.guild.id);

		// Now shake it and show it! (as a nice embed, too!)
		const top10Embed = new MessageEmbed()
			.setTitle('Leaderboard')
			.setAuthor(bot.user.username, bot.user.avatarURL)
			.setDescription('Our top 10 points leaders!')
			.setColor(0x00ae86);

		for (data of top10) {
			try {
				top10Embed.addField(
					`${message.guild.members.get(data.user)}`,
					`${data.points} points`
				);
			} catch (e) {
				return console.log(e);
			}
		}

		message.channel.send(top10Embed).catch((err) => {
			console.log(err);
		});
	},
};
