const Discord = require("discord.js");

module.exports = {
  name: "RemoveRole",
  aliases: ["removerole", "Removerole", "REMOVEROLL"],
  description: "Remove Roles from other users!",
  catergory: "Moderation",
  usage: "Question",
  run: async (bot, message, args) => {
    

/*








*/
    
   
if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_SERVERS");

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));
/*




*/

let uPic = rMember.displayAvatarURL;
let theyalreadyhavethat = new Discord.RichEmbed()
.setTitle(`They already have that role! ${message.author.tag}`);
///

/*

//// so this is the just the addrole.js ////

*/

///
let RemoveRole = new Discord.RichEmbed()
.setTitle(`You lost a role! <!${rMember.id}>`)
.addField("Role", `${gRole.name}`)
.setThumbnail(uPic)
.setColor(0x41ff00);

     



///

////////////////////////////
///

  try{
    await rMember.send(RemoveRole)
  }catch(e){


    return;



  }



  }
}
 
/*


the sky is blue!


*/