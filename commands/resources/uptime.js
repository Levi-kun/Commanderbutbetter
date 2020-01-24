const { RichEmbed, Client} = require(`discord.js`)

module.exports = {
        name: "uptime",
        description: "Displays the bots current uptime!",
        usage: "!uptime",
        category: "resources",
        aliases: ["ut", "Uptime", "UPTIME"],
    run: async (bot, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()

        
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }
    let uptimeEmbed = new RichEmbed ()
        .setTitle(`Duration of my Instance:`)
        .setDescription(`${duration(bot.uptime)}`)
        .setTimestamp()

    message.channel.send(uptimeEmbed)
    }
}
