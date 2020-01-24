const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const Discord = require('discord.js')
let botconifg = require(`../../json/botconfig.json`)

module.exports = {

    name: "reputation",
    aliases: ["Reputation", "REPUTATION"],
    description: "8Ball for luck and fun!",
    catergory: "Points",
    usage: "Question",
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
    }
}
        let userPic = message.author.avatarURL;
        let myReputation = new Discord.RichEmbed ()
        .setTitle(`${message.author.username}`)
        .setColor(botconifg.green)
        .setThumbnail(userPic)
        .addField(`POINTS`, score.points,true)
        .addField(`Reputation`, score.reputation,true);

        message.channel.send(myReputation);



    }


};