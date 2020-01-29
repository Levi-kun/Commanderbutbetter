const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = require("../../json/warnings.json");
let red = false;
const errors = require("../../utils/errors.js")
module.exports = {
  name: "warn",
  aliases: ["Warn", "WARN"],
  description: "Warn other people for their wrong doings!",
  catergory: "Moderation",
  usage: "warn <user>",
  run: (bot, message, args) => {

  //!warn @daeshan <reason>
 
   
if(!message.member.hasPermission("KICK_MEMBERS")) {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, "MANAGE_MESSAGES");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./json/warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


  if(!reason) {
    
    reason = "There was no reason";


  };
  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);


  let warnchannel = message.guild.channels.find(`name`, "me");
  if (!warnchannel) {

    warnchannel = message.channel
    red = true

  }

  
  warnchannel.send(warnEmbed)

  if(red === false) {

  if(message.channel.id === warnchannel.id) return;
   
  message.channel.send(warnEmbed)

  }

  


  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("You should create that role dude.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
  }

  }
}
