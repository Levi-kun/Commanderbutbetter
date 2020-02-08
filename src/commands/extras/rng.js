module.exports = {
	name: 'rng',
	aliases: ['randomnumber', 'rnumber', 'randomn', 'rn'],
	description: 'Random Number Generator! (RNG)',
	catergory: 'extras',
	usage: 'none',
	run: (bot, message, args) => {


      let rng = Math.floor((Math.random() * 100000) + 1)


    message.channel.send(`${rng} is your random number!`)
	}
};
