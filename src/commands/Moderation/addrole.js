const Discord = require("discord.js");
const errors = require("../../utils/errors.js")

    
module.exports = {
  name: "addrole",
  aliases: ["Addrole", "AddRole", "addRole"],
  description: "addrole",
  catergory: "Moderation",
  usage: "addrole <user>",
  run: async (bot, message, args) => {

  //!addrole @andrew Dog Person
  // if...
  if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES"); //if he doesn't have the perm to do so why should we allow him?
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]); // this is the @ted person
  if(!rMember) return message.reply("Couldn't find that user, yo."); //the @ was unsuccessful
  let role = args[1]; //this is the role
  if(!role) return message.reply("Specify a role!"); //if there is no role then um please give us the role
 try {
  var gRole = message.guild.roles.find(`name`, role); //find the role
 } catch (e) {

  console.log(e)
 }
  if(!gRole) return message.reply("Couldn't find that role."); // that role doesn't exist
 

      
  let uPic = rMember.displayAvatarURL;
  let theyalreadyhavethat = new Discord.RichEmbed()
  .setTitle(`They already have that role! ${message.author.tag}`);
  /* 

so here is the actual code not just a bunch of if statements to make sure nothing is confusded with the bot





*/
  if(rMember.roles.has(gRole.id)) return message.reply(theyalreadyhavethat); //uh they already have that role so um... no
  await(rMember.addRole(gRole.id)); // let's just add them the role.
    
    let yougotanewrole = new Discord.RichEmbed()
    .setTitle("You got a New Role")
    .addField("Role", `${gRole.name}`)
    .setColor(0x41ff00)
    .setThumbnail(uPic);
  /*


  
  */

    
    message.channel.send(addRole)
    
  
}
}