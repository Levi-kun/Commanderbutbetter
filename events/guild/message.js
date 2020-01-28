const { Client, Collection, RichEmbed } = require('discord.js')
const commando = require('discord.js-commando')
const botconfig = require('../../json/botconfig.json')
const Discord = require('discord.js')
const fs = require('fs')
const bot = new Client()
const SQLite = require('better-sqlite3')
const sql = new SQLite('./score.sqlite')
const Canvas = require('canvas');

bot.commands = new Collection()
bot.aliases = new Collection()
///
let purple = botconfig.purple
const cooldowns = new Collection()


 module.exports = async (bot, message) => { 

 let upvote = '👍'

  if (message.author.bot) return;
  //                                                won't react to other bots this is also vital to put in the very beggining.
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
    let vodka = new RichEmbed()
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
        username: message.author.username,
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
  let commandName = cmd.slice(prefix.length).toLowerCase();
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
    cooldowns.set(command, new Collection())
  }
  const now = Date.now()
  const timestamps = cooldowns.get(command)
  const cooldownAmount = (command.cooldown || 6) * 1000
  if(!message.author.id === botconfig.botowner) { 
 
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
    
    let coolDownEmbed = new RichEmbed()
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
  if(message.author.id === "494195747969826821") {

    if(message.attachments.size > 0) {

      message.delete()
    }

  }

  if (command) { 
    
    command.run(bot, message, args) // there's a command? run it!

    console.log(`${command.name} was used in ${message.channel.name} by ${message.author.tag}`)

   //  console.log(command.name)
   // console.log(command.cooldown)
  }

};