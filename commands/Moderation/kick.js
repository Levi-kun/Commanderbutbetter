const Discord = require("discord.js");
const errors = require("../../utils/errors.js");
    
    
module.exports = {
  name: "kick",
  aliases: ["Kick", "Kicked", "kicked"],
  description: "8Ball for luck and fun!",
  catergory: "Fun",
  usage: "Question",
  run: (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(kUser.hasPermission("MANAGE_MEMBERS")) return errors.equalPerms(message, "MANAGE_MEMBERS");
 
    
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "me");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}
};