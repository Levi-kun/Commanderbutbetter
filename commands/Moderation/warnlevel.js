const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

const errors = require("../../utils/errors.js");
let warnss = require("../../json/warnings.json");
module.exports = {
  name: "warnlevel",
  aliases: ["Warnlevel", "Wlevel", "WLevel", "WLEVEL"],
  description: "8Ball for luck and fun!",
  catergory: "Moderation",
  usage: "Question",
  run: async (bot, message, args) => {
  
if(!message.member.hasPermission("KICK_MEMBERS")) {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);
        //Now lets send our embed. but we would like to delete it....... 
       //so now lets do this um ya
    message.channel.send(embed).then(msg => message.delete(5000));
}

  let wUserEmbed = new Discord.RichEmbed()
  .setTitle(`Couldn't find them yo`);
    
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(wUserEmbed);
  let warnlevel = warnss[wUser.id].warns;
  
  let wuserembedthatsofrlevels = new Discord.RichEmbed()
  .setTitle(`<@${wUser.id}> has a ${warnlevel} warnings`);
  message.reply(wuserembedthatsofrlevels);

  }
};