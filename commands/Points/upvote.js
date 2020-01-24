const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const Discord = require('discord.js')
let botconfig = require(`../../json/botconfig.json`)
module.exports = {
    name: "upvote",
     aliases: ["Upvote", "UPVOTE"],
     description: "Upvote a user!",
     catergory: "Points",
     cooldown: 86400,
     usage: "upvote user",
     run: async (bot, message, args) => {
         let score
        if (message.guild) {
        score = bot.getScore.get(message.author.id, message.guild.id)
        if (!score) {
        score = {
        id: `${message.guild.id}-${message.author.id}`,
        user: message.author.id,
        username: message.author.username,
        guild: message.guild.id,
        points: 0,
        reputation: 0
         }
         let newEmbed = new Discord.RichEmbed()
         .setDescription(`${message.author.username} first time being upvoted!`)
         message.channel(newEmbed)
    }
}
let uUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let noUserFound = new Discord.RichEmbed()
.setTitle(`Can't Find User!`)
.setDescription(`${message.author.username}`)
.setColor(botconfig.red)
.setTimestamp();
//
//
if(!uUser) return message.channel.send(noUserFound);
// Limited to guild owner - adjust to your own preference!
 
  const pointsToAdd = 1;
 
  // Get their current points.
  let userscore = bot.getScore.get(uUser.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${uUser.id}`, user: uUser.id, guild: message.guild.id, points: 0, reputation: 1 }
  }
  userscore.points += pointsToAdd;
 
  // We also want to update their level (but we won't notify them if it changes)
  let userRep = Math.floor(botconfig.levelPoint * Math.sqrt(score.points));
  userscore.reputation = userRep;
 
  // And we save it!
  bot.setScore.run(userscore);
  let uUserPic = uUser.avatarURL
  let recivedEmbed = new Discord.RichEmbed ()
  .setTitle(`UPVOTED`)
  .setColor(botconfig.purple)
  .setImage(uUserPic)
  .addField(
      `\`${uUser}\``,
      `${pointsToAdd} points and now sittiting at\n\` ${userscore.points}\` points.`
  );
message.channel.send(recivedEmbed)
// done o:
    }
};