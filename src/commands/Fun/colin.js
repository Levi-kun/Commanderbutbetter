const { MessageEmbed } = require(`discord.js`);
const botconfig = require(`../../../json/botconfig.json`);

module.exports = {
	name: 'colin',
	aliases: ['colinstuff ', 'colins', 'cs'],
	description: '8Ball for luck and fun!',
	catergory: null,
	usage: 'Question',
	run: async (bot, message, args) => {
		let legobefore = await message.channel.send(`COLIN!`);
		let seanbradly = bot.users.find(`id`, '530638280736374794');
		let colinandSteveHarvey = new MessageEmbed()
			.setDescription(`Random Stuff Colin Posted`)
			.setAuthor(seanbradly.username, seanbradly.displayAvatarURL)
			.addField(
				'.',
				'Steve Harvey is the host of the Steve Harvey Morning Show radio program, and the popular TV shows Family Feud and Celebrity Family Feud, The Steve Harvey Show, family favorite Little Big Shots, and the new competition reality program Funderdome. His popularity continues to grow to global proportions, bolstered by his new role as host of the Miss Universe Pageant. \nHarvey is currently one of the most powerful voices in media, touting a career spanning nearly 30 years as a top stand-up comedian, actor, award winning TV personality and talk show host, best-selling author, entrepreneur, and humanitarian.'
			)
			.setTimestamp()
			.setColor(botconfig.purple);

		let theLifeofSteveHarvey = new MessageEmbed()
			.addField(
				'.',
				`Harvey began his entertainment career in comedy, working the stand-up circuit. His popularity as a comedian enabled him to make his mark in television and film, first as host of It’s Showtime at the Apollo. He went on to star in several popular shows, including The Steve Harvey Show. Harvey then expanded his reach into radio, as host of the nationally syndicated, The Steve Harvey Morning Show. He is also the author of multiple New York Times best-selling titles. His first book Act Like a Lady, Think Like a Man: What Men Really Think… inspired the 2012 box office topping movie, Act Like a Lady, Think Like a Man. \nHis newest book Jump is set to release on December 5, 2016.`
			)
			.setTimestamp()
			.setColor(botconfig.purple);

		let harveyList = new MessageEmbed()
			.addField(
				'.',
				`Harvey’s list of accolades includes several NAACP Image Awards, a People’s Choice Award, induction into the National Association of Broadcasters Hall of Fame, and a star on the Hollywood Walk of Fame. He also won the Daytime Emmy Award for Outstanding Talk Show Host for The Steve Harvey Show in 2014 and 2015, as well as Outstanding Game Show Host for Family Feud in 2014. Harvey most recently received a Primetime Emmy Nomination for Little Big Shots, as Outstanding Host for A Reality or Reality-Competition Program.`
			)
			.setTimestamp()
			.setColor(botconfig.purple);

		let omegaPsiPhi = new MessageEmbed()
			.addField(
				'.',
				`Harvey is a member of Omega Psi Phi Fraternity, Inc., and a proud parent with wife Marjorie to seven children. Harvey hopes to use his platform to motivate others to pursue their dreams, and serve as an example of the power of faith and hard work.`
			)
			.setTimestamp()
			.setColor(botconfig.purple);

		let boomPeterGriffen = new MessageEmbed()
			.addField(
				`.`,
				`Peter Griffin is the main character of the American animated sitcom Family Guy. He is voiced by the series' creator, Seth MacFarlane, and first appeared on television, along with the rest of the Griffin family, in the 15-minute pilot pitch of Family Guy on December 20, 1998. Peter was created and designed by MacFarlane himself. MacFarlane was asked to pitch a pilot to the Fox Broadcasting Company based on Larry & Steve, a short made by MacFarlane which featured a middle-aged character named Larry and an intellectual dog, Steve. After the pilot was given the green light, the Griffin family appeared in the episode "Death Has a Shadow".`
			)
			.setTimestamp()
			.setColor(botconfig.purple);

		setTimeout(() => {
			legobefore.edit(colinandSteveHarvey);
		}, 5000);
		setTimeout(() => {
			message.channel.send(theLifeofSteveHarvey);
		}, 6001);
		setTimeout(() => {
			message.channel.send(harveyList);
		}, 6009);
		setTimeout(() => {
			message.channel.send(omegaPsiPhi);
		}, 6025);
		setTimeout(() => {
			message.channel.send(boomPeterGriffen);
		}, 6199);
	}
};

/*

Peter is married to Lois Griffin and is the father of Meg, Chris, and Stewie. He also has a dog named Brian, with whom he is best friends. He has worked at a toy factory, and at Quahog's Brewery. Peter's voice was inspired by the security guards that MacFarlane heard at his school. His appearance was a redesign of the protagonist Larry from MacFarlane's previous animated short films The Life of Larry and Larry & Steve. He has appeared in several pieces of Family Guy merchandise, including toys, T-shirts, and video games, and has made crossover appearances in other shows, including The Simpsons, South Park, Drawn Together, American Dad! and Family Guy's spin-off series The Cleveland Show.
Peter Griffin is a middle class Irish American, who is a bespectacled, obese blue collar worker with a prominent Rhode Island and Eastern Massachusetts accent.[1] Peter and his wife Lois have three children; Meg, Chris, and Stewie. He is the illegitimate son of Thelma Griffin and Mickey McFinnigan, and was raised by Thelma and his stepfather Francis Griffin. Peter and his family live in the fictional town of Quahog, Rhode Island, which is modeled after Providence, Rhode Island.[2][3][4] Peter primarily worked as a safety inspector at the Happy-Go-Lucky Toy Factory, until his boss Jonathan Weed choked to death on a dinner roll while dining with Peter and Lois; he then became a fisherman on his own boat, known as the "S.S. More Powerful than Superman, Batman, Spider-Man, and The Incredible Hulk Put Together," with the help of two Portuguese immigrants, Santos and Pasqual, until his boat was destroyed.[5][6] He now works in the shipping department of the Pawtucket Patriot brewery.[7][8] Peter is also shown in various jobs for single episodes and cutaway gags. In one episode Peter played for the New England Patriots until his behavior resulted in him being kicked off the team. In a running gag, storylines are randomly interrupted by extremely long, unexpected fights between Peter and Ernie the Giant Chicken, an anthropomorphic chicken who serves as an archenemy to Peter.[9] These battles parody the action film genre, with explosions, high-speed chases, and immense devastation to the town of Quahog
MacFarlane initially conceived Family Guy in 1995 while studying animation at the Rhode Island School of Design (RISD).[11] During college, he created his thesis film entitled The Life of Larry,[11] which was submitted by his professor at RISD to Hanna-Barbera. MacFarlane was hired by the company.[12] In 1996, MacFarlane created a sequel to The Life of Larry entitled Larry & Steve, which featured a middle-aged character named Larry and an intellectual dog, Steve; the short was broadcast in 1997 as one of Cartoon Network's World Premiere Toons.[11] Executives at Fox saw the Larry shorts and contracted MacFarlane to create a series, entitled Family Guy, based on the characters.[13] Fox proposed MacFarlane complete a 15-minute short, and gave him a budget of $50,000.[14] Several aspects of Family Guy were inspired by the Larry shorts.[15] While working on the series, the characters of Larry and his dog Steve slowly evolved into Peter and Brian.[13][16] MacFarlane stated that the difference between The Life of Larry and Family Guy was that "Life of Larry was shown primarily in my dorm room and Family Guy was shown after the Super Bowl."[15]
LEGO Ninjago is a Lego theme introduced in 2011.[1] It is the first to be based on ninja since the discontinuation of the Ninja sub theme of the Castle line in 2000.[2] Whilst it retains some elements of this previous theme, one of the main differences is a more detailed accompanying story, primarily underpinned the TV series that it's based on, Ninjago: Masters of Spinjitzu.
LEGO Ninjago
The theme enjoyed popularity and success in its first year, and a further two years were commissioned before a planned discontinuation in 2013.[3] However, after a brief hiatus, the line was revived after feedback from fans and has been in production ever since.[4]

*/
