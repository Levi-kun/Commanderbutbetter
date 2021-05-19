const { readFileSync } = require(`fs`);
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'setbadges',
	aliases: ['setb', 'setbadge'],
	description: 'Set Your Profile Things!',
	catergory: 'Points',
	usage: '[ID:FLAG:NUMBER] , <Placement:NUMBER>',
	run: async (bot, message, args) => {
		let profilerow = bot.getProfile.get(message.author.id);

		const badgejason = `./json/badgeshop.json`;
		const badgejson = JSON.parse(
			readFileSync(`${badgejason}`, 'UTF-8')
		);
		//
		let find = (Id) => {
			//no such array

			//search array for key
			var badgejsons = badgejson.Shop;
			for (var i = 0; i < badgejsons.length; ++i) {
				//if the name is what we are looking for return it
				if (badgejsons[i].ID === Id) return i;
			}
		};
		//
		let userHasEnoughPoints = (points, amountRequired) => {
			let userPoints = points;
			let pointsRequired = amountRequired;
			if (!userPoints) return;
			if (userPoints > pointsRequired) {
				return true;
			} else if (userPoints < pointsRequired) {
				return false;
			}
		};
		//
		if (!args[0]) {
			let regret = new MessageEmbed()
				.setTitle(`Badge Menu`)
				.setAuthor(
					`${message.author.username}`,
					`${message.author.displayAvatarURL}`
				)
				.setFooter(`Make Sure To \`USE the ID!\``);
			let badges = badgejson.Shop.forEach((x) => {
				let IDstring = parseInt(x.ID);
				if (isOdd(IDstring) === '1') {
					regret.addField(
						`\`${x.ID}\`: ${x.name.toUpperCase()} :`,
						`${x.Icon} ${x.Cost}votes`,
						true
					);
				} else {
					regret.addField(
						`\`${x.ID}\`: ${x.name.toUpperCase()} :`,
						`${x.Icon}  ${x.Cost} votes`,
						true
					);
				}
			});
			function isOdd(num) {
				return num % 2;
			}

			return message.channel.send(regret);
		}
		var grabbedbadge;
		let messageid = message.author.id;
		let grabPoints = bot.getScore.get(messageid, message.guild.id);
		let pointsUser = grabPoints.points;
		let badges = badgejson.Shop.forEach((x) => {
			if (`${x.ID}` === `${args[0]}`) {
				if (userHasEnoughPoints(pointsUser, x.Cost) === true) {
					grabbedbadge = x.ID;
					//
					//
					profilerow = {
						badge1: `${grabbedbadge}`,
					};
					bot.setBadges.run(profilerow, message.author.id);
				} else {
					let notEnoughEmbed = new MessageEmbed()
						.setTitle(
							`${message.member.displayName}n\nYou don't have enough Points!`
						)
						.setDescription(`${x.Cost} > ${pointsUser}`);
					return message.channel.send(notEnoughEmbed);
				}
			} else {
				return;
			}
			let xName = bot.getProfile.get(message.author.id);
			let getBadgeIndex = find(xName.badge1);
			if (userHasEnoughPoints(pointsUser, x.Cost) === false) {
				return;
			} else {
				let grabbedbadgeEmbed = new MessageEmbed();
				grabbedbadgeEmbed.setTitle(
					`Badged Set!\n${message.author.username}: ${badgejson.Shop[getBadgeIndex].Icon}`
				);
				message.channel.send(grabbedbadgeEmbed);
			}
		});
	},
};
