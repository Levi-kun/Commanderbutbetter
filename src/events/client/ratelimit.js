const Discord = require("discord.js")
const prefix = require("../../json/botconfig.json")



module.exports = (bot) => {
    console.log(`x-----x-----x====x====x-----x----x`)
    console.log(`We hit a rate limit details:`)
    console.log(`TYPE: ${bot.rateLimitInfo.method}`)
    console.log(`HOW MUCH WE SENT: ${bot.rateLimitInfo.limit}`)
    console.log(`x-----x-----x====x====x-----x----x`)
};