const { RichEmbed } = require('discord.js');
const botconfig = require('../../../json/botconfig.json');
let purple = botconfig.purple;
const { readdirSync, readFileSync } = require('fs');

module.exports = {
	name: 'help',
	aliases: ['Help', 'HELP'],
	description: 'Lists out current commands!',
	catergory: 'resources',
	cooldown: 5,
	usage: 'Question',
	run: async (bot, message, args) => {
		const data = [];
		const { commands } = message.client;

		let prefixes = JSON.parse(
			readFileSync(
				'/Users/leviselvage/Desktop/commanders.js-master/json/prefixes.json',
				'utf8'
			)
		);
		if (!prefixes[message.guild.id]) {
			prefixes[message.guild.id] = {
				prefixes: botconfig.prefix
			};
		}

		let prefix = prefixes[message.guild.id].prefixes;
		if (args[0] === 'help') {
			return message.channel.send(
				`\`INCORRECT USAGE\`\n \`CORRECT USAGE\`: ${prefix}help [command]`
			);
		}
		if (!args.length) {

			// what is this prefix thing? oh yes it's that guild's prefix not the toodoolsssss

			let Invite = await message.channel.createInvite({
				unique: false, // That tells the bot not to use an existing invite so that this will be unique
				maxAge: 0 // By default invites last 24 hours. If you want to change that, modify this (0 = lasts forever, time in seconds)
			});

			const helpembed = new RichEmbed()
				.setColor(purple)
				.setAuthor(
					message.guild.name + ' Help',
					message.guild.iconURL,
					`${Invite}`
				)
				.setThumbnail(bot.user.displayAvatarURL)
				.setTitle(`HELP MENU`);

			const categories = readdirSync('./src/commands/');

			helpembed.setDescription(
				`**${message.author.username}**:\n${message.guild.me.displayName}'s prefix is: **${prefix}**`
			);
			helpembed.setFooter(
				`© ${message.guild.me.displayName} | Total Commands: ${bot.commands.size}`,
				bot.user.displayAvatarURL
			);

			categories.forEach((catergory) => {
				const dir = bot.commands.filter((c) => c.catergory === catergory);
				
				if(catergory === 'secret') return;
				const capitalise =
					catergory.slice(0, 1).toUpperCase() + catergory.slice(1);
				try {
					helpembed.addField(
						`❯ ${capitalise} [${dir.size}]:`,
						dir.map((c) => `\`${c.name}\``).join(' ')
					);
				} catch (e) {
					console.log(e);
				}
			});

			message.channel.send(helpembed);
		}

		const name = args[0];
		const command =
			commands.get(name) ||
			commands.find((c) => c.aliases && c.aliases.includes(name));

		if (!command) return;

		if (command.cooldown === undefined) {
			command.cooldown = '6';
		}

		let tacos = `\*\*${command.aliases.join(', ') || command.aliases}\*\*`;
		let burritos = `\*\*${command.description}\*\*`;
		let pizza = `\*\*${command.catergory}\*\*`;
		let peperoni = `\*\*${command.usage}\*\*`;
		let IceCream = `\*\*${command.cooldown}\*\*`;

		let awesome = new RichEmbed()
			.setTitle(`${command.name}:`)
			.setColor(botconfig.green)
			.addField(`Alias(es)`, tacos)
			.addField(`Description`, burritos, true)
			.addField(`Usage`, peperoni, true)
			.addBlankField()
			.addField(`Catergory`, pizza)
			.addField(`Cooldown`, IceCream)
			.setTimestamp()
			.setThumbnail(
				'http://www.pngall.com/wp-content/uploads/2/Question-Mark-PNG-Picture.png'
			);
		message.channel.send(awesome);
	}
};
