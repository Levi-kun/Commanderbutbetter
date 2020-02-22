const { readFileSync } = require(`fs`);
const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'badges',
	aliases: ['badge'],
	description: 'What Badges are there?',
	catergory: 'Points',
	usage: 'none',
	run: async (bot, message, args) => {
		const badgejason = `./json/badgeshop.json`;
		const badgejson = JSON.parse(
			readFileSync(`${badgejason}`, 'UTF-8')
		);
		let badgejsons = badgejson.Shop;
		let regret = new RichEmbed()
			.setTitle(`Badge Menu`)
			.setAuthor(
				`${message.author.username}`,
				`${message.author.displayAvatarURL}`
			)
			.setFooter(`Make Sure To \`USE the ID!\``);

		let badges = badgejsons.forEach((x) => {
			let IDstring = parseInt(x.ID);
			if (isOdd(IDstring) === '1') {
				regret.addField(
					`\`${x.ID}\`: ${x.name.toUpperCase()} :\n`,
					`\n\n${x.Icon} ${x.Cost}votes`,
					true
				);
			} else {
				regret.addField(
					`\`${x.ID}\`: ${x.name.toUpperCase()} :\n`,
					`\n\n${x.Icon}  ${x.Cost} votes`,
					true
				);
			}
		});
		function isOdd(num) {
			return num % 2;
		}

		message.channel.send(regret);
	}
};
