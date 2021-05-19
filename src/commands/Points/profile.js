const { readFileSync } = require(`fs`);
const { MessageAttachment } = require('discord.js');
const { toImage } = require(`emojione`);
const Canvas = require(`canvas`);

module.exports = {
	name: 'profile',
	aliases: ['myprofile'],
	description: 'Your Profile!',
	catergory: 'Points',
	usage: '<usertag>',
	run: async (bot, message, args) => {
		try {
			let emoji = '274728982035955722';
			await message.react(emoji);
		} catch (e) {
			message.channel.send(emoji);
		}
		let score;
		let grabProfile;

		let grabUserMention = message.guild.member(
			message.mentions.users.first() ||
				message.guild.members.fetch(args[0])
		);
		if (message.guild) {
			if (!grabUserMention) {
				grabProfile = bot.getProfile.get(message.author.id);
				console.log(`${grabProfile.pictureurl}`);
				if (!grabProfile) {
					message.channel.send(
						`Unfortnuatly ${message.author.username} doesn't have a profile.`
					);
				}
				score = bot.getScore.get(message.author.id, message.guild.id);

				if (!score) {
					score = {
						id: `${message.guild.id}-${message.author.id}`,
						user: message.author.id,
						username: message.author.username,
						guild: message.guild.id,
						points: 0,
						reputation: 0,
					};
				}
			} else {
				grabProfile = bot.getProfile.get(grabUserMention.user.id);
				if (!grabProfile) {
					score = bot.getScore.get(message.author.id, message.guild.id);

					if (!score) {
						score = {
							id: `${message.guild.id}-${message.author.id}`,
							user: message.author.id,
							username: message.author.username,
							guild: message.guild.id,
							points: 0,
							reputation: 0,
						};
					}
					return message.channel.send(
						`Unfortnuatly ${grabUserMention.user.username} has no profile.`
					);

					score = bot.getScore.get(
						grabUserMention.user.id,
						message.guild.id
					);
				}
				if (!score) {
					score = {
						id: `${message.guild.id}-${grabUserMention.user.id}`,
						user: grabUserMention.user.id,
						username: grabUserMention.user.username,
						guild: message.guild.id,
						points: 0,
						reputation: 0,
					};
				}
			}
		}

		class Profile {
			constructor(message, profilelink, score) {
				if (!grabUserMention) {
					this.profilePic = message.author.displayAvatarURL;
					if (message.member.displayName === message.author.username) {
						this.username = message.member.displayName;
					} else {
						this.username = message.author.username;
					}

					this.profilelink = profilelink;
					this.score = score;
					this.discriminator = message.author.discriminator;
				} else {
					this.profilePic = grabUserMention.user.displayAvatarURL;

					if (
						grabUserMention.displayName === grabUserMention.user.username
					) {
						this.username = grabUserMention.displayName;
					} else {
						this.username = grabUserMention.user.username;
					}

					this.profilelink = profilelink;
					this.score = score;
					this.discriminator = grabUserMention.user.discriminator;
				}
				if (Math.sign(this.score.points) === 1) {
					this.symbol = '+';
				} else {
					this.symbol = ' ';
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

				let badges = grabProfile.badge1;
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
				ctx.fillRect(
					canvas.width / 2.5 - 10,
					canvas.height / 5.2 - 65,
					canvas.width / 2.5 + 100,
					canvas.height / 5.2 + 10
				);
				//
				ctx.fillStyle = 'rgba(225,225,225,0.5)';
				ctx.fillRect(0, 700 - 250, 700, 250);

				ctx.fillStyle = 'rgba(225,225,225,0.5)';
				ctx.fillRect(0, 700 - 250, canvas.width / 2.2, 600);

				ctx.fillStyle = 'rgba(210,220,220,0.85)';
				ctx.fillRect(425, canvas.height / 1.3, 700, 250);

				function wrapText(context, text, x, y, maxWidth, lineHeight) {
					let words = text.split(' ');
					let line = '';

					for (let n = 0; n < words.length; n++) {
						let testLine = line + words[n] + ' ';
						let metrics = ctx.measureText(testLine);
						let testWidth = metrics.width;
						if (testWidth > maxWidth && n > 0) {
							ctx.fillText(line, x, y);
							line = words[n] + ' ';
							y += lineHeight;
						} else {
							line = testLine;
						}
					}
					ctx.fillText(line, x, y);
				}

				let maxWidth = 400;
				let lineHeight = 36;
				let x = 15;
				let y = canvas.height / 1.4;
				let text = `${grabProfile.message}`;

				ctx.font = applyText(canvas, text, 60);
				ctx.fillStyle = '#000000';
				wrapText(ctx, text, x, y, maxWidth, lineHeight);
				// Assign the decided font to the canvas
				ctx.font = applyText(canvas, `${this.username}`, 90);
				ctx.fillStyle = '#000000';
				ctx.fillText(
					this.username,
					canvas.width / 2.5,
					canvas.height / 5.2
				);

				//
				ctx.font = applyText(canvas, `#${this.discriminator}`, 90);
				ctx.fillStyle = '#000000';
				ctx.fillText(
					`#${this.discriminator}`,
					canvas.width / 2.5,
					canvas.height / 3.5
				);

				if (badges) {
					const badgejason = `./json/badgeshop.json`;
					const badgejson = JSON.parse(
						readFileSync(`${badgejason}`, 'UTF-8')
					);
					let getBadgeIndex = find(badges);
					ctx.font = applyText(
						canvas,
						`${badgejson.Shop[getBadgeIndex].Icon}`,
						45
					);
					let emojitojpg = emojiToJpg(badgejson.Shop[getBadgeIndex].Icon);
					let emojiPng = await Canvas.loadImage(emojitojpg);

					ctx.drawImage(emojiPng, 445, canvas.height / 1.25, 60, 60);
					function find(Id) {
						var badgejsons = badgejson.Shop;
						for (var i = 0; i < badgejsons.length; ++i) {
							if (badgejsons[i].ID === Id) return i;
						}
					}

					function emojiToJpg(input) {
						//'<img class="emojione" alt="⚾" title=":baseball:" src="https://cdn.jsdelivr.net/emojione/assets/4.5/png/32/26be.png"/>'
						let html = toImage(input);
						let cutHtmlbefore = html.split('"')[7];
						return cutHtmlbefore;
					}
				}
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

				const attachment = new MessageAttachment(
					canvas.toBuffer(),
					'profile-image.png'
				);

				////////////////////////////////////
				// SECTION ////////////////////////////////////
				///////////////////////////////////////

				return message.channel.send(attachment);
			}
		}
		let profileURL;
		profileURL =
			`${grabProfile.pictureurl}` ||
			'https://i.pinimg.com/736x/a1/e2/14/a1e214bdf77954997ae49cb7d49aebc9.jpg';

		let profile = new Profile(message, profileURL, score);

		profile.compiler();
	},
};
