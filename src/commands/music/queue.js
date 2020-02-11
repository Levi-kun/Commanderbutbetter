const { RichEmbed } = require(`discord.js`);
const ytdl = require('ytdl-core');
module.exports = {
    name: "queue",
    aliases: ["whatsplaying", "what'splaying", "queuelist"],
    description: "What's the queue?",
    catergory: "music",
    usage: "none",
    run: async (bot, message, args) => {
        let i;
        const serverQueue = bot.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
        i = 1;
        let serverQueueEmbed = new RichEmbed ()
        .setTitle(`${message.guild.name}'s Music Queue`)
        .setAuthor(`Queue`, message.guild.iconURL)
        serverQueue.songs.forEach(s => {
            i++
            let songname = this.title
            serverQueueEmbed.addField(`${i}: *${songname}*`)
        })
}
}