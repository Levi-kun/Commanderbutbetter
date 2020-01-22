const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "SMJE",
  aliases: ["smje", "Smje", "startmemberjoinevent", "Startmemberjoinevent", "STARTMEMBERJOINEVENT"],
  description: "Recreates the memberjoin event",
  catergory: "Util",
  usage: "none",
  OwnerRequired: true,
  run: async (bot, message, args) => {

 
    bot.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));


  }

}