const Discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["Serverinfo", "ServerInfo", "serverInfo", "SERVERINFO"],
  description: "8Ball for luck and fun!",
  catergory: "Fun",
  usage: "Question",
  run: (bot, message, args) => {
     
    
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name, true)
    .addField("Created On", message.guild.createdAt, true)
    .addField("Region", message.guild.region)
    .addField("Verification Level", message.guild.verificationLevel)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount, true)
    .addField("Owner", message.guild.owner.user.username, true);
    

    message.channel.send(serverembed);
    
  }

}