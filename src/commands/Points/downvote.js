const SQLite = require("better-sqlite3");
const sql = new SQLite("./score.sqlite");
const { MessageEmbed, Collection } = require("discord.js");
let botconfig = require(`../../../json/botconfig.json`);
module.exports = {
  name: "downvote",
  aliases: ["Downvote", "DOWNVOTE"],
  description: "Downvote a user!",
  catergory: "Points",
  cooldown: 10,
  usage: "Question",
  run: async (bot, message, args) => {
    let score;
    if (message.guild) {
      score = bot.getScore.get(message.author.id, message.guild.id);
      if (!score) {
        score = {
          id: `${message.guild.id}-${message.author.id}`,
          user: message.author.id,
          username: message.author.username,
          guild: message.guild.id,
          points: 0,
          reputation: 0,
        };

        //
      }
    }
    let uUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    let noUserFound = new MessageEmbed()
      .setTitle(`Can't Find User!`)
      .setDescription(`${message.author.username}`)
      .setColor(botconfig.red)
      .setTimestamp();
    //
    //
    if (!uUser) return message.channel.send(noUserFound);
    if (uUser.id === message.author.id) {
      return message.channel.send(
        `${message.author.toString()}! You can't do that!`
      );
    }
    if (uUser.bot === true)
      return message.channel.send(
        `That's not how it works bud.\n\`Don't @ a bot\``
      );
    const twelvehours = bot.twelvehoursupvote;
    if (!twelvehours.has(message.author.id)) {
      twelvehours.set(message.author.id, new Collection());
    }
    const now = Date.now();
    const handler = twelvehours.get(message.author.id);
    const cooldownAmount = 43200000;
    if (handler.has(message.author.id)) {
      const expireTime = handler.get(message.author.id) + cooldownAmount;
      const timeLeft = (expireTime - now) / 1000;
      //
      let coolDownEmbed = new MessageEmbed()
        .setTitle(`Cooldown`)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor(botconfig.red)
        .addField(`WAIT`, timeLeft.toFixed(1), true)
        .setFooter(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setTimestamp();

      if (now < expireTime) {
        return message.channel.send(coolDownEmbed).catch((error) => {
          console.log(error);

          message.channel.send(
            `\`do I have embed perms?\`\`\nbtw you have ${timeLeft.toFixed(1)}`
          );
        });
      }
    }
    handler.set(message.author.id, now);
    setTimeout(() => handler.delete(message.author.id), cooldownAmount);
    // Limited to guild owner - adjust to your own preference!

    const pointsToRem = 1;

    // Get their current points.
    let userscore = bot.getScore.get(uUser.id, message.guild.id);
    // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
    if (!userscore) {
      userscore = {
        id: `${message.guild.id}-${uUser.id}`,
        user: uUser.id,
        username: uUser.user.username,
        guild: message.guild.id,
        points: 0,
        reputation: 1,
      };
    }
    userscore.points -= pointsToRem;

    // We also want to update their level (but we won't notify them if it changes)
    let userRep = Math.floor(botconfig.levelPoint * Math.sqrt(score.points));
    userscore.reputation = userRep;

    // And we save it!
    bot.setScore.run(userscore);
    let uUserPic = uUser.avatarURL;
    let recivedEmbed = new MessageEmbed()
      .setTitle(`DOWNVOTE`)
      .setColor(botconfig.purple)
      .setImage(uUserPic)
      .addField(
        `\`${uUser}\``,
        `${pointsToRem} points and now sittiting at\n\` ${userscore.points}\` points.`
      );
    message.channel.send(recivedEmbed);
    // done o:
  },
};
