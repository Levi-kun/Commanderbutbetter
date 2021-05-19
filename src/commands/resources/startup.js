
const { MessageEmbed } = require('discord.js');
const botconfig = require('../../../json/botconfig.json');
let purple = botconfig.purple;
const { readdirSync, readFileSync } = require('fs');

module.exports = {
	name: 'setupserver',
	aliases: ['setups', 'suserver', 'sus'],
	description: 'Lists out current commands!',
	catergory: 'resources',
	cooldown: 5,
	usage: 'Question',
	run: async (bot, message, args) => {
		/* -------------------------------------------------------------------------- */
		let prefixes = JSON.parse(
			readFileSync('./json/prefixes.json', 'utf8')
		);
		if (!prefixes[message.guild.id]) {
			prefixes[message.guild.id] = {
				prefixes: botconfig.prefix
			};
		}
		let tags1;
		let tags2;
		let genderaltag;
		let prefix = prefixes[message.guild.id].prefixes;
		/* -------------------------------------------------------------------------- */

		/* -------------------------------------------------------------------------- */
		let guildownerdm = message.channel;
		let MessageFirst = new MessageEmbed()
			.setColor(`COLOR`)
			.setTimestamp();
		/* -------------------------------------------------------------------------- */

		MessageFirst.setAuthor(message.guild.owner.displayName);
		MessageFirst.setTitle(
			`What are some tags for your server`
		);
		MessageFirst.setDescription(
			`EX: \`ANIME\` \`GAMING\` \`SCHOOL\` \`FORTNITE\`\nTo Cancel type \`cancel\`\nDon't mess up! Make sure your typing right!`
		);
		/* -------------------------------------------------------------------------- */
		try {
			//
			guildownerdm.send(MessageFirst);
			guildownerdm.send(
				`Let's just get started!\nI'm going to ask some question just respond to the best of your abilities!`
			);
			const filter = (m) =>
				m.author.id === message.guild.ownerID;
			guildownerdm
				.awaitMessages(filter, {
					max: 1,
					time: 30000,
					errors: ['time']
				})
				.then((collected) => {
					collected.delete(10000);
					if (collected.first().content === 'cancel') {
						return guildownerdm.send('Canceled.');
					}

					tags1 = collected.first().content;
					guildownerdm.send(
						`\`${tags1}\` -- You still have one more tag open!`
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

							tags2 = collected.first().content;
							guildownerdm.send(
								`\`${tags2}\` -- That's it Next thing what's the name of the #\`general\` channel?`
							);
							guildownerdm
								.awaitMessages(filter, {
									max: 1,
									time: 15000,
									errors: ['time']
								})
								.then((collected) => {
									collected.delete(10000);
									if (
										collected.first().content === 'cancel'
									) {
										return guildownerdm.send('Canceled.');
									}

									genderaltag = collected.first().content;
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
											if (
												collected.first().content ===
												'cancel'
											) {
												return guildownerdm.send(
													'Canceled.'
												);
											}

											var reportchannel = collected.first()
												.content;

											guildownerdm.send(
												`\`${reportchannel}\` -- aight That's all!\nThanks for the items!`
											);

											let guildd = bot.getGuild.get(
												message.guild.id
											);
											if (guildd) {
												guildd = {
													id: `${message.guild.id}`,
													tags1: `${tags1.toLowerCase() || null}`,
													tags2: `${tags2.toLowerCase() || null}`,
													general: `${genderaltag ||
														'general'}`,
													report: `${reportchannel ||
														'report'}`,
													showmemberjoin: 1
												};
											
												bot.replaceGuild.run(guildd)
												console.log({guildd})
											
											} else {
											
												guildd = {
													id: `${message.guild.id}`,
													tags1: `${tags1.toLowerCase() || null}`,
													tags2: `${tags2.toLowerCase() || null}`,
													general: `${genderaltag ||
														'general'}`,
													report: `${reportchannel ||
														'report'}`,
													showmemberjoin: 1
												};
												
												bot.setGuild.run(guildd);
												console.log({guildd})
											
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


	
	}
};
