module.exports = (bot) => {
	let prompt = process.openStdin();
	prompt.addListener('data', (res) => {
		let x = res
			.toString()
			.trim()
			.split(/ +/g);
		if(x === 'stop') {
			bot.destroy()
			process.exit()
		}
	});
};
