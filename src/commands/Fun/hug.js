const { MessageAttachment } = require('discord.js');
const superagent = require('superagent');


module.exports = {
	name: 'hug',
	aliases: ['Hug', 'Hugs', 'hugs'],
	description: 'You can hug anyone!',
	catergory: 'Fun',
	usage: '[User]',
	run: async (bot, message, args) => {
		const { body } = await superagent.get(`https://nekos.life/api/v2/img/hug`);
		if(!args[0]) return message.channel.send(`so you are hugging yourself?`);
		let hugger =  message.guild.members.fetch(message.mentions.members.first()).then(huggerUser => {
			if(huggerUser.id === message.author.id) return message.channel.send(`so you are hugging yourself?`)
		})
		function hugTime() {


		

	

		let hugUser = message.guild.members.fetch(message.mentions.members.first()).then(huggedUser => {
			actualhugging(huggedUser)

		})
	}

		
	

		function actualhugging(userHugged) {
	
/*

messageEmbed that I don't need anymore

		let hugEmbed = new MessageEmbed()
			.setTitle('Hug `__(*^*__)_` ')
			.setDescription(`**${message.author.username}** hugged ***${hugUser}***!`)
			.setImage(body.url)
			.setColor('RANDOM');
*/
		const hugAttachment = new MessageAttachment(body.url)
		
		message.channel.send(`\`\_\_\(\*\^\*\_\_\)\_\`\n${message.author.username} hugged ${userHugged.displayName}`, hugAttachment)
		
	}

	hugTime()
}
};
