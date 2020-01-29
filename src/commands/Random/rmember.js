const Discord = require("discord.js");
const errors = require("../../utils/errors.js")

    
module.exports = {
  name: "qewr",
  aliases: ["abn ", "qewrz", "qwerty"],
  description: "8Ball for luck and fun!",
  catergory: "Fun",
  usage: "Question",
  run: (bot, message, args) => {

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]); // this is the @ted person
 
  message.channel.send(`${rMember.parent.tag}`);
  }
}