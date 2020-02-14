const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
	constructor() {
		//
		super({
			//
			disableEveryone: false
			//
		});
		//
		this.commands = new Collection();
		//
		this.queue = new Map();
		//
		this.twelvehours = new Collection();

		//
		this.commands = new Collection();
		//
		this.aliases = new Collection();
		//
	}
};
