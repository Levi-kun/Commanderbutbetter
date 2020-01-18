const Discord = require("discord.js");
const errors = require("../../utils/errors.js")
const superagent = require("Superagent");
    
module.exports = {
    name: "catfact",
    aliases: ["Catfact", "catfacts", "Catfacts"],
    description: "random catfacts!",
    usage: "[no args]",
    run: async (bot, message, args) => {
    
        let {body} = await superagent
    .get(`https://fact.birb.pw/api/v1/cat`);
    
    let catfactembed = new Discord.RichEmbed()
    .setColor("#40E0D0")
    .setTitle("MEOWWW!!")
    .setDescription(body.string)
    
    message.channel.send(catfactembed)
    
    }
}