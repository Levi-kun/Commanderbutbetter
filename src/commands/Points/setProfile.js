const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');
const { Attachment, RichEmbed } = require('discord.js');
let botconifg = require(`../../../json/botconfig.json`);
const Canvas = require(`canvas`);

module.exports = {
	name: 'setprofile',
	aliases: ['changeprofile', 'setp', 'changep'],
	description: 'Set Your Profile Things!',
	catergory: 'Points',
	usage: 'none',
	run: async (bot, message, args) => {
        let firstEmbedtoinform = new RichEmbed ()
        .setTitle(`Hey You Want To Set Your Profile?\nLet's start with what your 'message'\nQuick! You only have 2 Min to answer!`)
        .setColor(botconifg.red)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL);
	
            let sms;
            const filter = (m) =>
			m.author.id === message.author.id;
        message.channel.send(firstEmbedtoinform);
        if(!args[0]) {
		message.channel
			.awaitMessages(filter, {
				max: 1,
				time: 1200000,
				errors: ['time']
			})
			.then((collected) => {
				collected.delete(10000);
				if (collected.first().content === 'cancel') {
					return message.channel.send('Canceled.');
                }
                const smessages = collected.first().content.toLowerCase()
                message.channel.send(`\`${smessages}\` -- Okay How About your profle link *(btw it's 700x700)*`)
                
                message.channel.awaitMessages(filter, {
				max: 1,
				time: 1200000,
				errors: ['time']
			    })
                .then((collected) => {
                    collected.delete(10000);
                    if (collected.first().content === 'cancel') {
                        return message.channel.send('Canceled.');
                    }
                     sms = collected.first().content.toLowerCase()
                    
                     let grabProfile = bot.getProfile.get(
                        message.author.id
                    ); 
                    grabProfile = {
                        message:  `${smessages}`,
                        pictureurl: `${sms}`
                    }
    
                    let showMemberjoinEmbed = new RichEmbed()
                        .setTitle(`${grabProfile.message}\n${grabProfile.pictureurl}`)
                        .setColor(botconifg.green)
                        .setAuthor(message.author.username, message.author.displayAvatarURL)
                        .setDescription(
                            `Saved!`
                        );
    
                    message.channel.send(showMemberjoinEmbed);

                    bot.updateProfile.run(grabProfile, message.author.id);
                });
                });
            
        } else {

            // message.channel.send(`I'll do this command later! sorry but I'm a bit too buzy of at the moment`)
            let eodEmbed = new RichEmbed ()
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            let guildd = bot.getGuild.get(message.guild.id)
            let betterargs = args.slice(0).join(",")
            guildd = {
    
                message:  `${betterargs[0]}`,
                pictureurl: `${betterargs[1]}`
            };
            
            eodEmbed.setTitle(`Saved! \nTRUE:${guildd.showmemberjoin}`)
            bot.updateProfile.run(guildd, message.guild.id);
            

        }

         
	}
};
