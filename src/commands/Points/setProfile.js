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
        .setTitle(`Hey You Want To Set Your Profile?\nLet's start with what your 'message'`)
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
				time: 30000,
				errors: ['time']
			})
			.then((collected) => {
				collected.delete(10000);
				if (collected.first().content === 'cancel') {
					return message.channel.send('Canceled.');
                }
                const smessages = collected.first().content.toLowerCase()
                message.channel.send(`\`${smessages}\` -- Okay How About Social Media *(just put your handle/username)*`)
                
                message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000,
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
                        socialmedia: `${sms}`
                    }
    
                    let showMemberjoinEmbed = new RichEmbed()
                        .setTitle(`${grabProfile.message} and ${grabProfile.socialmedia}`)
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

            message.channel.send(`This doesn't uses arguments! \`usage\`: setprofile`)

        }

         
	}
};
