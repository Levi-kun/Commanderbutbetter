const Discord = require("discord.js")

module.exports = {
    name: "lmao",
    aliases: ["LMAO", "LMAOOOO", "MLAO"],
    description: "LMAOOO. funny!",
    usage: "Question",
    run: async (bot, message, args) => {
    let what = new Discord.RichEmbed()
    .setTitle(`What was teh joke?`);
    
    if(!args[0]) return message.channel.send(what);
    let replies =["LMAOOOO.", "Wat."];
    
    
    
    let result = Math.floor((Math.random() * replies.length));
    let quetion = args.slice(0).join(" ");
    
    let roflEmbed = new Discord.RichEmbed()
    .setTitle(quetion)
    .setColor("RANDOM")
    .addField(replies[result], replies[result]);

let commandChannel = message.guild.channels.find(`name`, "bot-commands");
    if(!commandChannel) return message.channel.send(roflEmbed);

commandChannel.send(roflEmbed).then(msg => msg.delete(10000));


    
    
}
}