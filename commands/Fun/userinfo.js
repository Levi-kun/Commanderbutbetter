const Discord = require("discord.js")
module.exports = {
  name: "userinfo",
  aliases: ["Userinfo", "UserInfo", "userInfo"],
  description: "8Ball for luck and fun!",
  usage: "Question",
  run: (bot, message, args) => {
   var time = Date.now();
    

    let uPic = message.author.displayAvatarURL;
    let userEmbed = new Discord.RichEmbed()
    .setColor("#495963")
    .setThumbnail(uPic)
    .setAuthor(`${message.author.username}:`)
    .addField("\`Name\`", message.author.username, true)
    .addField("\`Nickname\`", message.member.displayName, true)
    .addField("\`Status\`", message.author.presence.status, true)
    .addField("\`Highest Role\`", message.member.highestRole)
    .addField("\`Joined Discord\`", message.author.createdAt)
    .addField("\`Joined At\`", message.member.joinedAt);
    
    message.channel.send(userEmbed)
  }
}