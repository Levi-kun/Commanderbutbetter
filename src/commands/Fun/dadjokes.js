const { MessageEmbed, Message } = require('discord.js');

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
	usage: 'dadjoke <dj>',
	run: async (bot, message, args) => {
		let newarg = args.slice(0).join(' ');;
		
		if (!newarg) return message.channel.send(`hey blank I'm dad!`);
		class dadjokes {
			constructor(dadjoke) {
				this.dadjoke = dadjoke;
				/* ------------------------------------ */

				this.iamdad = `Hi, \`${dadjoke}\`, I am dad`;
			}


		}

		const dadjok = new dadjokes(newarg);
		let Invite = await message.channel.createInvite({
			unique: false, // That tells the bot not to use an existing invite so that this will be unique
			maxAge: 0 // By default invites last 24 hours. If you want to change that, modify this (0 = lasts forever, time in seconds)
		});
	

		message.channel.send(`${dadjok.iamdad}`)
	}
};
