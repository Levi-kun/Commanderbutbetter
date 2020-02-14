const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');
const { RichEmbed, Attachment} = require('discord.js');
let botconifg = require(`../../../json/botconfig.json`);
//@ts-check
const Canvas = require(`canvas`);
module.exports = {
	name: 'profile',
	aliases: ['myprofile'],
	description: 'Your Profile!',
	catergory: 'Points',
	usage: 'no usage',
	run: async (bot, message, args) => {
        message.channel.startTyping()
		try {
			let emoji = '274728982035955722';
			await message.react(emoji);
		} catch (e) {
			message.channel.send(emoji);
		}
        let score;
        let grabProfile;

        let userinfoUser = message.guild.member(
			message.mentions.users.first() || message.guild.members.get(args[0])
		);
		if (message.guild) { 
            if(!userinfoUser) {
            grabProfile = bot.getProfile.get(message.author.id)  
            if(!grabProfile) {
                grabProfile = {
                    id:`${message.author.id}`,
                    user: message.author.username,
                    message:  `I'm of a Simple Man I live by Simple Rules!`,
                    pictureurl: null
                }
            }
                
            } else {

                grabProfile = bot.getProfile.get(userinfoUser.user.id)  
                if(!grabProfile) {
                    grabProfile = {
                        id:`${userinfoUser.user.id}`,
                        user: userinfoUser.user.username,
                        message:  `I'm of a Simple Man I live by Simple Rules!`,
                        pictureurl: null
                    }
                }

            }
            
            bot.setProfile.run(grabProfile)

            if(!userinfoUser) {
			score = bot.getScore.get(
				message.author.id,
				message.guild.id
			);
			if (!score) {
				score = {
					id: `${message.guild.id}-${message.author.id}`,
					user: message.author.id,
					username: message.author.username,
					guild: message.guild.id,
					points: 0,
					reputation: 0
				};
            }
            } else {
                score = bot.getScore.get(
                    userinfoUser.user.id,
                    message.guild.id
                );
                if (!score) {
                    score = {
                        id: `${message.guild.id}-${userinfoUser.user.id}`,
                        user: userinfoUser.user.id,
                        username: userinfoUser.user.username,
                        guild: message.guild.id,
                        points: 0,
                        reputation: 0
                    };
                }
            }
		}
	
      
		class Profile {
			constructor(message, profilelink, score) {
                if(!userinfoUser) {
				this.profilePic = message.author.displayAvatarURL;
                this.username = message.author.username;
                this.profilelink = profilelink
                this.score = score
                this.discriminator = message.author.discriminator
                } else {
                this.profilePic = userinfoUser.user.displayAvatarURL;
                this.username = userinfoUser.user.username;
                this.profilelink = profilelink
                this.score = score
                this.discriminator = userinfoUser.user.discriminator
                }
                if (Math.sign(this.score.points) === 1) {

                    this.symbol = '+'
                } else {
                    this.symbol = ' '
                }
			}

			async compiler() {
                

                const applyText = (canvas, text, font) => {
                    const RTXGAMING = canvas.getContext('2d');
            
                    // Declare a base size of the font
                    let fontSize = font;
            
                    do {
                        // Assign the font to the context and decrement it so it can be measured again 
                        RTXGAMING.font = `${(fontSize -= 10)}px sans-serif`;
                        // Compare pixel width of the text to the canvas minus the approximate avatar size
                    } while (RTXGAMING.measureText(text).width > canvas.width - 300);
            
                    // Return the result to use in the actual canvas
                    return RTXGAMING.font;
                };
                const canvas = Canvas.createCanvas(700, 700);
                const ctx = canvas.getContext('2d');
            
                // Since the image takes time to load, you should await it
                const background = await Canvas.loadImage(this.profilelink);
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            
                ctx.strokeStyle = '#ffffff';
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
                //
                ctx.fillStyle = 'rgba(225,225,225,0.5)';
                ctx.fillRect(0, 0, 700, 250);
                ctx.strokeStyle = '#ffffff';
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
                //
                ctx.fillStyle = 'rgba(225,225,225,0.5)';
                ctx.fillRect(0, 700-250, 700, 250);

                ctx.font = applyText(canvas, `${grabProfile.message}`, 40)
                ctx.fillStyle = '#000000';
                ctx.fillText(
                    `${grabProfile.message}`, 15, canvas.height / 1.4
                );
                // Assign the decided font to the canvas
                ctx.font = applyText(canvas, `${this.username}`, 90);
                ctx.fillStyle = '#000000';
                ctx.fillText(this.username, canvas.width / 2.5, canvas.height / 5.20);
                //
                ctx.font = applyText(canvas, `#${this.discriminator}`, 90);
                ctx.fillStyle = '#000000';
                ctx.fillText(`#${this.discriminator}`, canvas.width / 2.5, canvas.height / 3.5);
                // Pick up the pen
                ctx.beginPath();
                // Start the arc to form a circle
                ctx.arc(125, 125, 100, 0, Math.PI * 2.1, true);
                // Put the pen down
                ctx.closePath();
                // Clip off the region you drew on
                ctx.clip();
                //
            
                const avatar = await Canvas.loadImage(this.profilePic);
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'black';
                ctx.drawImage(avatar, 25, 25, 200, 200);
                ctx.font = '100px sans-serif';
		        ctx.fillStyle = '#000000';
		        ctx.fillText(` ${this.symbol}${this.score.points}`, 55, 155);
            
                const attachment = new Attachment(
                    canvas.toBuffer(),
                    'profile-image.png'
                );

                ////////////////////////////////////
                // SECTION ////////////////////////////////////
                ///////////////////////////////////////
			
                return message.channel.send(attachment)
			}
        }
        let profileURL;
        profileURL = grabProfile.pictureurl || 'https://i.pinimg.com/736x/a1/e2/14/a1e214bdf77954997ae49cb7d49aebc9.jpg';
        
        let profile = new Profile(message , profileURL, score);
        
        profile.compiler()
        
        message.channel.stopTyping();
	}
};
