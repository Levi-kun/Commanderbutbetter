const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const {Attachment} = require('discord.js')
let botconifg = require(`../../../json/botconfig.json`)

module.exports = {

    name: "reputation",
    aliases: ["Reputation", "REPUTATION"],
    description: "8Ball for luck and fun!",
    catergory: "Points",
    usage: "Question",
    run: async (bot, message, args) => {
        let score
        if (message.guild) {
        score = bot.getScore.get(message.author.id, message.guild.id)
        if (!score) {
        score = {
        id: `${message.guild.id}-${message.author.id}`,
        user: message.author.id,
        username: message.author.username,
        guild: message.guild.id,
        points: 0,
        reputation: 0
         }
    }
}
const Canvas = require(`canvas`)




const applyText = (canvas, text) => {
	const RTXGAMING = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 90;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		RTXGAMING.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (RTXGAMING.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return RTXGAMING.font;
};


  const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');
	// Since the image takes time to load, you should await it
  const background = await Canvas.loadImage('/Users/leviselvage/Desktop/commanders.js-master/pictures/wallpaper.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ffffff';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  //

  
  // Select the font size and type from one of the natively available fonts
  // Slightly smaller text placed above the member's display name
  let symbol;
  if(Math.sign(score.points) === 1) {
    symbol = "+"
  } else {
    symbol = "-"
  }
	// Assign the decided font to the canvas
	ctx.font = applyText(canvas, `${message.author.username}`);
	ctx.fillStyle = '#000000';
	ctx.fillText(message.author.username, canvas.width / 2.5, canvas.height / 2.0);

  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2.1, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
  ctx.clip();
  //
  
  const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	ctx.font = '100px sans-serif';
	ctx .fillStyle = '#000000';
  ctx.fillText(` ${symbol}${score.points}`, 50, 155);
  
	const attachment = new Attachment(canvas.toBuffer(), 'welcome-image.png');

	
  
  // if some error occured then it will log it


        let userPic = message.author.avatarURL;
        let myReputation = new Discord.RichEmbed ()
        .setTitle(`${message.author.username}`)
        .setColor(botconifg.green)
        .setThumbnail(userPic)
        .addField(`POINTS`, score.points,true)
        .addField(`Reputation`, score.reputation,true);

        message.channel.send(" ",attachment);



    }


};

