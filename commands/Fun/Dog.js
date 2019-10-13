Discord = require("discord.js");
const superagent = require("Superagent");

module.exports = {
    name: "Dog",
    aliases: ["dog", "dogs", "Dogs"],
    description: "Dogs! Dogs! Dogs!",
    usage: "[no args]",
    run: async (bot, message, args) => { 
    
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    
    let dogembed = new Discord.RichEmbed()
    .setColor("#40E0D0")
    .setTitle("DOGGO!")
    .setImage(body.url)
    
    message.channel.send(dogembed)
    
    
    
    }
}