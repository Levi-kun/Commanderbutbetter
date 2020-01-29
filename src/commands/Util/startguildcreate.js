const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "sgc",
  aliases: ["starguildcreate"],
  description: "Recreates the guild create event",
  catergory: "Util",
  usage: "none",
  OwnerRequired: true,
  run: async (bot, message, args) => {

 
    bot.emit('guildCreate', message.guild);


  }

}