let { botowner } = require(`../../../json/botconfig.json`);

module.exports = {
	name: 'reload',
	description: 'reloads a bot command!',
	usage: 'reload <command>',
	catergory: 'Util',
	OwnerRequired: true,
	aliases: ['creload', 'Reload', 'RELOAD'],
	run: async (bot, message, args) => {
		const load = (dirs) => {
			if (message.author.id != botowner)
				return message.channel.send('aight imma head out idiot');

			if (!args[0])
				return message.channel.send('Please provide a command to reload!');

			let commandName = args[0].toLowerCase();

			try {
				delete require.cache[require.resolve(`../${dirs}/${commandName}.js`)]; // usage !reload <name>
				bot.commands.delete(commandName);
				const pull = require(`../${dirs}/${commandName}.js`);
				bot.commands.set(commandName, pull);
			} catch (e) {
				return;
			}

			message.channel.send(
				`The command \`${args[0].toUpperCase()}\` has been reloaded!`
			);
		};
		[
			'Util',
			'resources',
			'Random',
			'Points',
			'Moderation',
			'Fun'
		].forEach((x) => load(x));
	}
};
