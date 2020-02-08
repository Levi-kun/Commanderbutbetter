const { RichEmbed } = require(`discord.js`);
const ytdl = require('ytdl-core');
module.exports = {
    name: "play",
    aliases: ["p"],
    description: "Get Your Id!",
    catergory: "music",
    usage: "link",
    run:  async (bot, message, args) => {
		//
		return message.channel.send(`THIS IS CURRENTLY UNDER GOING WORK! PLEASE WAIT!`)
		//
		const voiceChannel = message.member.voiceChannel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		if(!args) {
			return message.channel.send(`Link?`)
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('end', () => voiceChannel.leave());
		});
    }
};