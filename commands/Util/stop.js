const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "Stop",
  aliases: ["stop", "STOP"],
  description: "Stops the bot",
  catergory: "Utility",
  usage: "none",
  OwnerRequired: true,
  run: async (bot, message, args) => {

    console.log(`aight Imma head out ${message.author.name}`)
    message.channel.send(`aight Imma head out`)
 
    bot.destroy()


  }

}