const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const Discord = require('discord.js')
let botconifg = require(`../../json/botconfig.json`)

module.exports = {

    name: "leaderboard",
    aliases: ["Leaderboard", "LEADERBOARD"],
    description: "leaderboard!",
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

const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);

// Now shake it and show it! (as a nice embed, too!)
const embed = new Discord.RichEmbed()
.setTitle("Leaderboard")
.setAuthor(bot.user.username, bot.user.avatarURL)
.setDescription("Our top 10 points leaders!")
.setColor(0x00AE86);

for(const data of top10) {
embed.addField(bot.users.get(data.user).tag, `${data.points} points (reputation ${data.reputation})`);
}

message.channel.send(embed)
  }



};