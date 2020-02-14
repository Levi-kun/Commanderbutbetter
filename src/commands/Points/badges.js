const {readFileSync,readFile} = require(`fs`)
const { Attachment, RichEmbed } = require('discord.js');
let botconifg = require(`../../../json/botconfig.json`);

const Canvas = require(`canvas`);

module.exports = {
	name: 'badges',
	aliases: ['badges'],
	description: 'What Badges are there?',
	catergory: 'Points',
	usage: 'none',
	run: async (bot, message, args) => {
		const badgejason = `./json/badgeshop.json`
        const badgejson = JSON.parse(readFileSync(`${badgejason}`, 'UTF-8'))
        let badgejsons = badgejson.Shop;
        let regret = new RichEmbed ()
        .setTitle(`Badge Menu`)
        .setAuthor(`${message.guild.displayName}`, `${message.author.displayAvatarURL}`)
        let badges = badgejsons.forEach(x => {
            let IDstring = parseInt(x.ID)
            if(isOdd(IDstring) === "0") {
                regret.addField(`${x.name.toUpperCase()} :`, `${x.Icon} $${x.Cost}`, true)
            } else {
            regret.addField(`${x.name.toUpperCase()} :`, `${x.Icon}  ${x.Cost} votes`, true)
            }
        })
        function isOdd(num) { return num % 2;}

        message.channel.send(regret)

        
	}
};
