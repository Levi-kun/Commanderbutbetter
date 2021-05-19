const { MessageEmbed } = require(`discord.js`);
const ytdl = require('ytdl-core-discord');
const queue = new Map();
module.exports = {
    name: "skip",
    aliases: ["s"],
    description: "Skips the current song!",
    catergory: "music",
    usage: "link",
    run: async (bot, message, args) => {
		const serverQueue = bot.queue.get(message.guild.id);
		if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
		if (!serverQueue) return message.channel.send('There is no song that I could skip!');
		serverQueue.connection.dispatcher.end();
    }
};