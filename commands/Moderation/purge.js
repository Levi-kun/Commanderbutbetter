const Discord = require("discord.js");
const errors = require("../../utils/errors.js")
//




//  
module.exports = {
  name: "purge",
  aliases: ["Purge", "PURGE"],
  description: "8Ball for luck and fun!",
  catergory: "Moderation",
  usage: "Question",
  run: (bot, message, args) => {
let noargs = new Discord.RichEmbed()
.setTitle("How many messages do you want deleted?");
////


////
let deletedmessages = new Discord.RichEmbed()
.setTitle(`Cleared ${args[0]} messages!`);

/*



*/

let oldmessage = new Discord.RichEmbed()
.setTitle("The messages are way too old")
.setColor(0xFF0000);

   if(!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");
  if (args[1] == "help") {
    message.reply("Usage: !addrole <user> <role>");
    return;
  }

//

  if(!args[0]) return message.channel.send(noargs);
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(deletedmessages).then(msg => msg.delete(10000))
}).catch(error => {

  message.channel.send(oldmessage).then(msg => msg.delete(10000));
  });


  }
};