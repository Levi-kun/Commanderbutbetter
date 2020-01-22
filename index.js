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

/*


21/1/2020 
All events are now in a different folder

Index.js has become nothing but a redirect file


*/

// these are the handlers 

;["aliases", "commands"].forEach(x => bot[x] = new Collection());
;["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

//gonna make an event handler mate


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
