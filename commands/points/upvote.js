const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const Discord = require('discord.js')
let botconfig = require(`../../json/botconfig.json`)

module.exports = {

    name: "upvote",
    aliases: ["Upvote", "UPVOTE"],
    description: "8Ball for luck and fun!",
    catergory: "points",
    usage: "Question",
    run: async (bot, message, args) => {
        let score
        if (message.guild) {
        score = bot.getScore.get(message.author.id, message.guild.id)
        if (!score) {
        score = {
        id: `${message.guild.id}-${message.author.id}`,
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        reputation: 0
         }
    }
}
let uUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!uUser) return message.channel.send("Can't find user!");

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