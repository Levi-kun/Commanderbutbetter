const Discord = require('discord.js');
const botconfig = require('../../json/botconfig');

module.exports = {
    name: "rules",
    aliases: ["brules", "RULES", "Rules", "Brules"],
    description: "8Ball for luck and fun!",
    catergory: "Fun",
    usage: "Question",
    run: (bot, message, args) => {
   message.delete()
   let gayEMBED25 = new Discord.RichEmbed()
   .setTitle("RULES")

   .setDescription("Follow These Rules")
    //
   .setColor(botconfig.red)
    //
   .addField("Never Ever Spam, exept in #bot-commands", `l; except the commands it self xD becasue I will just delete it!`)
    //
   .addField("Never Ever post NSFW", "never")
    //
   .addField("sooo I basically copy paste these ruless.. off", "Please show the respect that you would like to receive from other members. No harassment, discrimination, cyber-bullying, slander, or the intentional instigation of conflicts.")
    .addField("part 2", "Please respect all staff members and show compliance. Disrespect towards and noncompliance to any staff member may result in punishment. We would like to keep our server as clean as possible. Please keep any NSFW content, artwork or otherwise, off of the server.") 
    .addField("PART THREE", "This includes nudity/sexually suggestive photos/excessive gore/malicious links or files/illegal activites/undesirable discussions. Pedophilia is considered especially heinous and will result in an immediate ban. Keep your messages readable and usernames pingable.") 
    .addField("And Lastly Part 4", "Please do not post messages with fonts that are impossible to read. All members must be over the age of 13. Noncompliance can result in removal from the server unless permitted otherwise by a Staff member")
   .setFooter("Warn Progression, 1. talkeeed too 2. I guess your muteddd. 3. OOF, *Ban Hammer Initiated*");
   
   message.channel.send(gayEMBED25)
    
    
    
    
    }
}