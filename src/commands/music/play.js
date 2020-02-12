//@ts-check
const { RichEmbed } = require(`discord.js`);
const ytdl = require('ytdl-core');
module.exports = {
    name: "play",
    aliases: ["p"],
    description: "Plays the next song!",
    catergory: "music",
    usage: "link",
    run: async (bot, message, args) => {
		try {
			const queue = bot.queue;
			const serverQueue = bot.queue.get(message.guild.id);
	  
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel)
			  return message.channel.send(
				"You need to be in a voice channel to play music!"
			  );
			const permissions = voiceChannel.permissionsFor(message.client.user);
			if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
			  return message.channel.send(
				"I need the permissions to join and speak in your voice channel!"
			  );
			}
	  
			const songInfo = await ytdl.getInfo(args[0].toString());
			const song = {
			  title: songInfo.title,
			  url: songInfo.video_url
			};
	  
			if (!serverQueue) {
			  const queueContruct = {
				textChannel: message.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 5,
				playing: true
			  };
	  
			  queue.set(message.guild.id, queueContruct);
	  
			  queueContruct.songs.push(song);
	  
			  try {
				var connection = await voiceChannel.join();
				queueContruct.connection = connection;
				play(message, queueContruct.songs[0]);
			  } catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(err);
			  }
			} else {
			  serverQueue.songs.push(song);
			  let goodEmbed = new RichEmbed ()
			.setTitle(`Added The Song to the Queue!\n\n${song.title} --> Queue`)
			.setAuthor(message.author.username, message.author.displayAvatarURL);
			message.channel.send(goodEmbed)
			return;
			}
		  } catch (err) {
			console.log(err);
			message.channel.send(err.message);
		  }


		function play(message, song) {
			const queue = bot.queue;
			const guild = message.guild;
			const serverQueue = queue.get(message.guild.id);
		
			if (!song) {
			  serverQueue.voiceChannel.leave();
			  queue.delete(guild.id);
			  return;
			}
			
			const dispatcher = serverQueue.connection
			.playStream(ytdl(`${song.url}`, { filter: "audioonly" }))
			 .on("end", () => {
				console.log("Music ended!");
				serverQueue.songs.shift();
				play(message, serverQueue.songs[0]);
			  })
			  .on("error", error => {
				console.error(error);
			  });
			dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	  }
		},
	  
	
};    