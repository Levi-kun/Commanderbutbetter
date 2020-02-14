const {readFileSync,readFile} = require(`fs`)
const { Attachment, RichEmbed } = require('discord.js');
let botconifg = require(`../../../json/botconfig.json`);

const Canvas = require(`canvas`);

module.exports = {
	name: 'setbadges',
	aliases: ['setb'],
	description: 'Set Your Profile Things!',
	catergory: 'Points',
	usage: 'none',
	run: async (bot, message, args) => {
		if(!args[0]) return message.channel.send(`if you don't know what badge your getting do ?badges`)
        const badgejason = `./json/badgeshop.json`
		const badgejson = JSON.parse(readFileSync(`${badgejason}`, 'UTF-8'))
		var grabbedbadge;
		let badges = badgejson.Shop.forEach(x => {

			grabbedbadge = x.name;
			if(grabbedbadge === args[0]) {
				
				return;
			}

		});
		

		console.log({grabbedbadge})

        
	}
};
