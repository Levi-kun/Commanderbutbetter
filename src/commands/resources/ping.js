const { MessageEmbed } = require('discord.js');
const { blue, orange, red } = require('../../../json/botconfig.json');

module.exports = {
	name: 'ping',
	aliases: ['Ping', 'PING'],
	description: '8Ball for luck and fun!',
	cooldown: 5,
	catergory: 'resources',
	usage: 'Question',
	run: async (bot, message, args) => {
		let ball = new MessageEmbed()
			.setColor(blue)
			.setTitle('Ball hitting the table...');

		const msg = await message.channel.send(ball);
		let Alerted = new MessageEmbed().setTitle(`❗❗❗`).setColor(orange);

		let caught = new MessageEmbed()
			.setTitle('🏓PONG!🏓')
			.setColor(red)
			.addField('API latency', `${Math.round(bot.ping)}ms`, true)
			.addField(
				'Connection Latency',
				`${msg.createdTimestamp - message.createdTimestamp}ms`,
				true
			);

		msg.edit(Alerted).then(msg.edit(caught));
	}
};
