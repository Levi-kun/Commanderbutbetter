/*

Hey!
I see you have started to read my code!
I just want to say thank you

if there is empty space that is used for breathing
since us coders tend to get confused if there isn't adiqute
space in between large amount of code

Made by Levi Chan#3508

*/

// these are variables! they are used multiple times through out this file

const { Client, Collection, RichEmbed } = require('discord.js');
const commando = require('discord.js-commando');
const botconfig = require('./json/botconfig.json');
const tokenfile = require('./token.json');
const { readFileSync } = require('fs');
const moment = require('moment');
const bot = new Client();
const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');
const Canvas = require('canvas');

let tags1;
let tags2;
let genderaltag;

/// ==================================\\\

// const talkedRecently = new Set() was original cooldown but has been replaced 10/13/2019

/// =============================================\\

bot.on('guildCreate', async (guild) => {
	/* -------------------------------------------------------------------------- */
	let prefixes = JSON.parse(readFileSync('./json/prefixes.json', 'utf8'));
	if (!prefixes[guild.id]) {
		prefixes[guild.id] = {
			prefixes: botconfig.prefix
		};
	}

	let prefix = prefixes[guild.id].prefixes;
	/* -------------------------------------------------------------------------- */

	/* -------------------------------------------------------------------------- */
	let guildownerdm = guild.channels.find((ch) => ch.name === 'general');
	let MessageFirst = new RichEmbed()
		.setTitle(`Thanks for adding me!`)
		.setDescription(`Prefix: ${prefix}`)
		.addField(`${prefix}help`, 'for more help!')
		.setColor(`COLOR`)
		.setTimestamp();
	/* -------------------------------------------------------------------------- */
	let tostartEmbed = new RichEmbed()
		.setAuthor(guild.owner.displayName)
		.setTitle(`What are some tags for your server`)
		.setDescription(
			`EX: \`ANIME\` \`GAMING\` \`SCHOOL\` \`FORTNITE\`\nTo Cancel type \`cancel\`\nDon't mess up! Make sure your typing right!`
		);
	/* -------------------------------------------------------------------------- */

	console.log('Joined a new guild: ' + guild.name);
	/* -------------------------------------------------------------------------- */
	try {
		//
		guildownerdm.send(MessageFirst);
		guildownerdm.send(
      `Let's just get started!\n
      I'm going to ask some question just respond to the best of your abilities!`
		);
		const filter = (m) => m.author.id === guild.ownerID;
		guildownerdm.send(tostartEmbed);
		guildownerdm
			.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
			.then((collected) => {
				collected.delete(10000);
				if (collected.first().content === 'cancel') {
					return guildownerdm.send('Canceled.');
				}

				tags1 = collected.first().content;

				console.log(tags1);
				guildownerdm.send(`${tags1} -- You still have one more tag open!`);
				guildownerdm
					.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
					.then((collected) => {
						collected.delete(10000);
						if (collected.first().content === 'cancel') {
							return guildownerdm.send('Canceled.');
						}

						tags2 = collected.first().content;
						console.log(tags2);
						guildownerdm.send(
							`\`${tags2}\` -- That's it Next thing what's the name of the #\`general\` channel?`
						);
						guildownerdm
							.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
							.then((collected) => {
								collected.delete(10000);
								if (collected.first().content === 'cancel') {
									return guildownerdm.send('Canceled.');
								}

								genderaltag = collected.first().content;

								console.log(genderaltag);
								guildownerdm.send(
									`\`${genderaltag}\` -- That's it Next thing what's the name of the #\`report\` channel?`
								);
								guildownerdm
									.awaitMessages(filter, {
										max: 1,
										time: 15000,
										errors: ['time']
									})
									.then((collected) => {
										collected.delete(10000);
										if (collected.first().content === 'cancel') {
											return guildownerdm.send('Canceled.');
										}

										var reportchannel = collected.first().content;

										console.log(reportchannel);
										guildownerdm.send(
                    					`\`${reportchannel}\` -- aight That's all!\nThanks for the items!`
										);

										console.log(tags1 + ` a`);
										console.log(tags2 + ` a`);
										console.log(genderaltag + ` a`);
										console.log(reportchannel + ` a`);
										let guildd = bot.getGuild.get(guild.id);
										if (!guildd) {
											guildd = {
												id: `${guild.id}`,
												tags1: `${tags1}`,
												tags2: `${tags2}`,
												general: `${genderaltag}`,
												report: `${reportchannel}`
											};
											//
											bot.setGuild.run(guildd);
										}
									});
							});
					});
			});
	} catch (e) {
		//
		console.log(e);
		//
	}
});

bot.commands = new Collection();
bot.aliases = new Collection();

let purple = botconfig.purple;
const cooldowns = new Collection();

// let cdseconds = 4

/*

  made by Levi#3508å
  and thank you for using this.

*/

/*


21/1/2020 
All events are now in a different folder

Index.js has become nothing but a redirect file


*/

// these are the handlers

['aliases', 'commands'].forEach((x) => (bot[x] = new Collection()));
['console', 'command', 'event'].forEach((x) =>
	require(`./src/handlers/${x}`)(bot)
);

//this command let's the server to stay on!
bot.login(tokenfile.token || process.env.TOKEN);
// login to bot
