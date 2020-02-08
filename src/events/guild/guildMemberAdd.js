const Discord = require(`discord.js`);
const Canvas = require(`canvas`);

module.exports = async (bot, member) => {
	const guildSqlite = bot.getGuild.get(member.guild.id)

	if(!guildSqlite) {
		guildSqlite = {
			id: `${member.guild.id}`,
			tags1: `null`,
			tags2: `null`,
			general: `general`,
			report: `report`,
			showmemberjoin: 1
		};
		bot.setGuild.run(guildSqlite)

	} else {

	if(guildSqlite.showmemberjoin === 0) return;
	}

	const applyText = (canvas, text) => {
		const RTXGAMING = canvas.getContext('2d');

		// Declare a base size of the font
		let fontSize = 90;

		do {
			// Assign the font to the context and decrement it so it can be measured again 
			RTXGAMING.font = `${(fontSize -= 10)}px sans-serif`;
			// Compare pixel width of the text to the canvas minus the approximate avatar size
		} while (RTXGAMING.measureText(text).width > canvas.width - 300);

		// Return the result to use in the actual canvas
		return RTXGAMING.font;
	};
	/*

When someone joins this will happen:

*/
	let generalchat = member.guild.channels.find(`name`, `${guildSqlite.general}`); // find's general
	//let bothell = member.guild.channels.find('name', 'bot-commands') // find's bot channel
	console.log(`User ${member.user.username} has joined ${member.guild.name}`); // this also logs it.
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./assets/wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	//
	ctx.fillStyle = 'rgba(225,225,225,0.5)';
	ctx.fillRect(canvas.width / 2.9, canvas.height / 8, 450, 100);

	// Select the font size and type from one of the natively available fonts
	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#000000';
	ctx.fillText(
		`Welcome to ${member.guild.name},`,
		canvas.width / 2.5,
		canvas.height / 4.5
	);
	// Assign the decided font to the canvas
	ctx.font = applyText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#000000';
	ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 2.0);

	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2.1, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();
	//

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.shadowBlur = 10;
	ctx.shadowColor = 'black';
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(
		canvas.toBuffer(),
		'welcome-image.png'
	);

	generalchat
		.send(`Welcome to the server, ${member}!`, attachment)
		.catch((err) => {
			console.log(
				'ERROR OCURRED @T GUILDMEMBERADD, probably becasue can not message at general'
			);
		});

	// if some error occured then it will log it
	if (member.guild.id === `672585960181071902`) {
		const crinbe = member.guild.roles.find('name', 'crinbe');
		const crinby = member.guild.roles.find('name', 'crinby');

		member.addRole(crinbe);
		member.addRole(crinby);
	}
};
