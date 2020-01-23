const Discord = require('discord.js')
const botconfig = require("../../json/botconfig.json")

module.exports = {
    name: "ping",
    aliases: ["Ping", "PING"],
	description: "8Ball for luck and fun!",
	cooldown: 5,
    catergory: "resources",
    usage: "Question",
    run: async (bot, message, args) => {
	let ball = new Discord.RichEmbed()
	.setColor(botconfig.blue)
	.setTitle("Ball hitting the table...");
	
	
	const msg = await message.channel.send(ball);
	let Alerted = new Discord.RichEmbed()
	.setTitle(`❗❗❗`)
	.setColor(botconfig.orange);
	
	let caught = new Discord.RichEmbed()
	.setTitle("🏓PONG!🏓")
	.setColor(botconfig.red)
	.addField("API latency", `${Math.round(bot.ping)}ms`, true)
	.addField("Connection Latency", `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
	
	msg.edit(Alerted).then(msg.edit(caught));  
    
	} 
}