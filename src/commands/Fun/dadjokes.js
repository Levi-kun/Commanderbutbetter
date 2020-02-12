const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'dj',
	aliases: [
		'dadjokes',
		'dadj',
		'djokes',
		'dad-jokes',
		'djoke',
		'dadjoke'
	],
	description: 'Dad Jokes!',
	catergory: 'Fun',
	usage: '8ball <dj>',
	run: async (bot, message, args) => {
		let newarg = args.slice(0).join(' ');;
		let noArgsEmbed = new RichEmbed()
		.setTitle(
			`Hi Blank I'm Dad\n*No Really what are you?*`
		);
		if (!newarg) return message.channel.send(noArgsEmbed);
		class dadjokes {
			constructor(dadjoke) {
				this.dadjoke = dadjoke;
				/* ------------------------------------ */

				this.iamdad = `Hi, ${dadjoke}, I am dad`;
			}


		}

		const dadjok = new dadjokes(newarg);
		let Invite = await message.channel.createInvite({
			unique: false, // That tells the bot not to use an existing invite so that this will be unique
			maxAge: 0 // By default invites last 24 hours. If you want to change that, modify this (0 = lasts forever, time in seconds)
		});
		
		let dadJokeEmbed = new RichEmbed()
			.setTitle(`Dad Joke`)
			.setColor('BLUE')
			.setAuthor(
				message.author.username,
				message.author.displayAvatarURL,
				`${Invite}`
			)
			.addField(`${dadjok.dadjoke}`, `${dadjok.iamdad}`)
			.setTimestamp();

		message.channel.send(dadJokeEmbed);
	}
};
