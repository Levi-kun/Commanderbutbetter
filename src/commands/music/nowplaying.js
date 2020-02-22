const { RichEmbed } = require(`discord.js`);
const ytdl = require('ytdl-core');
module.exports = {
    name: "nowplaying",
    aliases: ["nplaying"],
    description: "What's currently playing?",
    catergory: "music",
    usage: "none",
    run: async (bot, message, args) => {
        const serverQueue = bot.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
}
}