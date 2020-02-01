const { RichEmbed } = require('discord.js');
const { writeFile, readFileSync } = require('fs');
const { noPerms } = require('../../utils/errors.js');
let prefixes = JSON.parse(
  readFileSync(
		`/Users/leviselvage/Desktop/commanders.js-master/json/prefixes.json`,'utf8'
	)
);
module.exports = {
	name: 'prefix',
	aliases: ['Prefix', 'PREFIX', 'Prefixed'],
	description: 'Customize the prefix!',
	catergory: 'Moderation',
	usage: 'Usage: prefix <desired prefix here>',
	run: (bot, message, args) => {
		if (!message.member.hasPermission('MANAGE_GUILD'))
			return noPerms(message, 'MANAGE_GUILD');

		prefixes[message.guild.id] = {
			prefixes: args[0]
		};

		writeFile(
			'/Users/leviselvage/Desktop/commanders.js-master/json/prefixes.json',
			JSON.stringify(prefixes),
			(err) => {
				if (err) console.log(err);
			}
		);

		let sEmbed = new RichEmbed()
			.setColor('#FF9900')
			.setTitle('Prefix Set!')
			.setDescription(`Set to ${args[0]}`);

		message.channel.send(sEmbed);
	}
};
