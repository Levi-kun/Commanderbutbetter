/*

Hey!
I see you have started to read my code!
I just want to say thank you

if there is empty space that is used for breathing
since us coders tend to get confused if there isn't adiqute
space in between large amount of code

Made by Levi Chan#3508
I repeat this below cause some people don't read the very first few lines

*/

// these are variables! they are used multiple times through out this file

// const
const { Client, Collection } = require('discord.js')
const commando = require('discord.js-commando')
const botconfig = require('./json/botconfig.json')
const tokenfile = require('./token.json')
const Discord = require('discord.js')
const fs = require('fs')
const moment = require('moment')
const bot = new Discord.Client()
const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const Canvas = require('canvas');

/// ==================================\\\

// const talkedRecently = new Set() was original cooldown but has been replaced 10/13/2019


/// =============================================\\
/*

the following things allow us to run commands and aliases

*/
// lets
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()
///
let purple = botconfig.purple
const cooldowns = new Discord.Collection()

// let cdseconds = 4

/*

  made by Levi
  fuck you if you delete this
  your gay.
  and thank you for using this.

*/

// events
/// /////////////////
/// ////////////
/// ///////////////////////
/// //////
///
/// /////////////////
/// /////////////////////
/// ///////////
/// ////
//
//

/*

the // is a comment on on line
the /* is a comment on multiple lines

The comments are for you.
but really there for me to understand on what I'm doing.

*/
require("./handlers/event")(bot) //gonna make an event handler mate

// on to the big things
//this is some code for the future don't mind this
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
const WelcomeTextFont = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 30;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
/*

When someone joins this will happen:

*/


bot.on('guildMemberAdd', async member => {
  // this is an embed
  /*
  let disEmbed = new Discord.RichEmbed()
    .setColor(botconfig.red) // we set the color of the embed
    .setTitle(`Welcome ${member.user.tag}`) // then set the title
    .setDescription(`Heyo!`) // this is the description aka  && Might remove
    .addField(
      'Welcome!',
      'If none of us is talking it is because we are working or sleeping!'
    ) // this is an field the comma "," seperates the header in the information
    .addField(`${member.user.username}`, `Welcome to ${member.guild.name}`) // this is another feild, reminding the user on what server it is in
  */

    /*

    this is spacing

    */
  let channel = member.guild.channels.find(ch => ch.name === 'general') // find's general
//let bothell = member.guild.channels.find('name', 'bot-commands') // find's bot channel
  console.log(`User ${member.user.username} has joined ${member.guild.name}`) // this also logs it.
  const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
  const background = await Canvas.loadImage('./pictures/wallpaper.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#ffffff';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  //
  ctx.fillStyle = 'rgba(225,225,225,0.5)';
  ctx.fillRect(canvas.width / 2.9 ,canvas.height / 8, 450, 100);
  
  // Select the font size and type from one of the natively available fonts
  // Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx .fillStyle = '#000000';
	ctx.fillText(`Welcome to ${member.guild.name},`, canvas.width / 2.5, canvas.height / 4.5);
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
  ctx.shadowColor = "black";
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment).catch(err => {
    console.log(
      'ERROR OCURRED @T GUILDMEMBERADD, probably becasue can not message at general'
    )
  })
  
  // if some error occured then it will log it
})

/*

*/

//

// this reads through ever file that's in the command folder




/*

*/


/*

Okay time to prepare yourself for the longest event.
The messaging event
this even goes on every time someone puts a message

*/
//
bot.on('message', async message => {
  
  let upvote = '👍'

  if (message.author.bot) return //                 won't react to itself this is also vital to put in the very beggining.
  //                                                this is so it doesn't go through every file same as for the on ebelow
  if (message.channel.type === 'dm') return //      if it is in the dm's then no nada.

  // this is some kinda code for asdlkfjwe

  // okay more breathing room

  // oh no
  // time to do messsss v.2
  function hook (channel, title, message, color, avatar) {
    // this is a custom webhook command that I wanted to try out

    // Boy I regreted it

    // this is embed that we use later
    let vodka = new Discord.RichEmbed()
      .setTitle(
        'Check the console *if* your not the bot owner please notify Levi Chan#3508'
      ) // if you read the first embed I explain what which means.
      .setColor('RANDOM') // who doesn't like random?

    // Reassign default parameters if dey blank
    if (!channel) return console.log('Channel aint specified') // thesse are the args or arguments.
    if (!title) return console.log('GAY title bruh') // if there is no args it'll say this
    if (!message) {
      return console.log('Aint no message high oof aint no message low oof.')
    }
    if (!color) color = 'd9a744' // this is standered
    if (!avatar) {
      avatar =
        'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'
    } // no point in changing this

    // now lets replace dem fuckers! if they did specifiy them
    avatar = avatar.replace(/\s/g, '')
    color = color.replace(/\s/g, '')

    // Now lets create dem WEBHOOOOKKKKSSSSS!

    // on second thought no. 
 
    // on third thought what the hell 
    //the world is a foundation... okay I'm testing vscode's multiline writing feature...
    //the world is a foundation... okay I'm testing vscode's multiline writing feature...
    //the world is a foundation... okay I'm testing vscode's multiline writing feature...
    //the world is a foundation... okay I'm testing vscode's multiline writing feature...
    //the world is a foundation... okay I'm testing vscode's multiline writing feature...
    // okay I did webooks and I hate myself now.
    channel.fetchWebhooks().then(webhook => {
      let foundHook = webhook.find('name', 'Webhook')
      // this runs if webhook aint found

      // if there isn't any webooks then let's just creat our own with the specified icon
      if (!foundHook) {
        channel
          .createWebhook(
            'Webhook',
            'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'
          )
          .then(webhook => {
            webhook
              .send('', {
                username: title,
                avatarURL: avatar,
                embeds: [
                  {
                    color: parseInt(`0x${color}`),
                    description: message
                  }
                ]
              }) // okay so this is the default.
              .catch(error => {
                console.log(error) // some kind of error? let's just see it already.
              })
          })
      } else {
        // if we do not need to make a webhookkk den this happppennnnnsss

        foundHook
          .send('', {
            username: title,
            avatarURL: avatar,
            embeds: [
              {
                color: parseInt(`0x${color}`),
                description: message
              }
            ]
            // breathing room
          })
          .catch(error => {
            message.channel.send(
              'Check the console *if your not the bot owner please notify Levi Chan#3508'
            ) // this is gay tho
            console.log(error)
          })
      } // breathing room
    })
  }

  // time to not do messsss
  // save dem words!
  let savewords = JSON.parse(fs.readFileSync('./json/savewords.json', 'utf8'))
  if (!savewords[message.author.id]) {
    savewords[message.author.id] = 'Hi'
  }

  /*

  */

  // checks to see if you already have a custom prefix
  let prefixes = JSON.parse(fs.readFileSync('./json/prefixes.json', 'utf8'))

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    }
  }

  // timeout embed

  // put non prefix commands here

  if (message.channel.ID === '630507255527112704') {
    if (message.attachments.size > 0) {
      console.log('YEET YEETUS')

      message.react(upvote)
    }
  }

  if (message.content === 'oof') {
    message.channel.send('oooOOOO0000F')
  }
  if (message.content === 'dep is gay') {
    message.channel.send(`YOUR GAY DEP!!! HAHAHAHAHAH YOUR GAY!!!`)
  }
//sqlite try number 4 10/14/19

  let score
  if (message.guild) {
    score = bot.getScore.get(message.author.id, message.guild.id)
    if (!score) {
      score = {
        id: `${message.guild.id}-${message.author.id}`,
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        reputation: 0
      }
    }
    // score.points++ not needed.

    const curLevel = Math.floor(botconfig.levelPoint * Math.sqrt(score.points))

    if (score.reputation < curLevel) {
      score.reputation++
      
      message.channel.send(
        `${message.author.name} leveled up to level **${curLevel}**! Ain't that dandy?`
      )
    }

    bot.setScore.run(score)
  }

  // makes everything abide to the prefix
  let prefix = prefixes[message.guild.id].prefixes
  if (!message.content.startsWith(prefix)) return
  // if it doesn't start with the prefix then ignore it

  // _\\
  //     \\
  // __/---\__\\

  // spam protection
  
  // custom code
  if (!savewords[message.author.id]) {
    savewords[message.author.id] = {
      savewords: botconfig.savewords
    }
  }

  if (!prefixes[message.guild.id]) {
    // if it has no custom prefix then it will make the prefix the default one.
    prefixes[message.guild.id] = {
      // checks to see if it has a prefix
      prefixes: botconfig.prefix // if it does not the default will become the prefix
    }
  }
  // variables for user
  let owner = botconfig.botowner // if it is the bot owner
  // for messages
  let messageArray = message.content.split(/ +/)
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let commandName = cmd.slice(prefix.length);
  const command = bot.commands.get(commandName) 
    || bot.commands.get(bot.aliases.get(commandName))
  // Mandatory non command handler commands
  if (cmd === `${prefix}hook`) {
    message.delete()

    let hookArgs = message.content.slice(prefix.length + 5).split(',')

    hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3])
  }

  /*

teh worlds

*/

  // end of Mandatory non command handler commands

  //

  //
  //

 

  //
  //

  //

  // runs command folder
  // what this does is look through all the files and check if the command we did isn't in there
  // let commandfile = bot.commands.get(cmd.slice(prefix.length)); //...
  // if(commandfile) commandfile.run(bot,message,args); //okay let's make sure they all have the async permissions
  // if(!commandfile) return; //no command file? no need.
  // this became obsolete

  //
  if (!command) return;
  //
  if (!cooldowns.has(command)) {
    cooldowns.set(command, new Discord.Collection())
  }
  const now = Date.now()
  const timestamps = cooldowns.get(command)
  const cooldownAmount = (command.cooldown || 6) * 1000
  if(!message.author.id === botconfig.botowner || message.guild.OwnerID) { 
 
  if (timestamps.has(message.author.id)) {
    //
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount
    let timeLeft = (expirationTime - now) / 1000
    //
    let name_cmd = cmd.slice(prefix.length)
    if (name_cmd === ``) {
      name_cmd = `null`
    }
    //\
    
    let coolDownEmbed = new Discord.RichEmbed()
      .setTitle(`Cooldown`)
      .setAuthor(`${message.author.username}`)
      .setColor(botconfig.red)
      .addField(`WAIT`, timeLeft.toFixed(1), true)
      .addField(`Command`, `\`${name_cmd}\``, true)

    if (now < expirationTime) {
      return message.channel.send(coolDownEmbed)
    }
  }

  timestamps.set(message.author.id, now)
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
  }
  // cooldown has to be in front of running commands so RETURN does stop the run of the command
  //
   // no command no job!

  //
  if (!command.OwnerRequired) {
    command.OwnerRequired = false;
  }
  //

  //
  if(command.OwnerRequired === true){

    if(!message.author.id === botconfig.botowner) { 
      let noOwnerValue = new Discord.RichEmbed()
      .setTitle(`You are not Owner`)
      .setDescription(`This is a \`OWNERONLY\` Command`)
      message.channel.send(noOwnerValue);
      return;
    }
  }
  //

  if (command) { 
    
    command.run(bot, message, args) // there's a command? run it!

    console.log(`${command.name} was used in ${message.channel.name} by ${message.author.tag}`)

   //  console.log(command.name)
   // console.log(command.cooldown)
  }
})

// sets timeout
// to stop spamming

// end of events

//this command let's the server to stay on!
bot.login(tokenfile.token)||(process.env.TOKEN) // login to bot
/*
There you did it! now it's time to markup the rest of the code but let's get honest here you read every comment

//////////////////////////////
CONGRATULATIONS!
////

Now I'm congratulating myself

some more breathing room. why? cause no one can have too much breathing room

*/
