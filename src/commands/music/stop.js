const { MessageEmbed } = require(`discord.js`);
const ytdl = require('ytdl-core-discord');
module.exports = {
    name: "stopmusic",
    aliases: ["stopplaying"],
    description: "Stops and leaves the voice channel",
    catergory: "music",
    usage: "none",
    run: async (bot, message, args) => {
		const serverQueue = bot.queue.get(message.guild.id);
		function stop(message, serverQueue) {
            if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
            serverQueue.songs = []
            serverQueue.connection.dispatcher.end();
        }
    }
}; 