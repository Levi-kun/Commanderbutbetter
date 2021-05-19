const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'MOHAMMAD',
	aliases: ['MOHHAMADWALI', 'rajab', 'wali'],
	description: 'mohammad be like',
	catergory: 'Fun',
	usage: 'MOHAMMAD RAjAB WALI',
	run: (bot, message, args) => {
		
		let ballembed = 'https://cdn.discordapp.com/avatars/645288483803365382/a_a5c39f55e332aae288b8185b3e748d00.gif?size=256&f=.gif'

		message.channel.send(`${ballembed}`);
		/* 


        this is funny right guys?

*/
	}
};
