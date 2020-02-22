const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');
const profilesql = new SQLite('./profile.sqlite');
const guildsql = new SQLite('./guild.sqlite');
const { ErelaClient, Utils } = require('erela.js');
const { nodes } = require(`../../../json/botconfig.json`);

module.exports = (bot) => {
	let statuses = [
		'Prefix: ?',
		'Owner Levi',
		'Join support',
		'discord.gg/eeKFnjV'
	]; // some strings that we'll use late

	//
	['command'].forEach((handler) => {
		require(`../../handlers/${handler}`)(bot);
	});

	/* -------------------------------------------------------------------------- */

	const table = sql
		.prepare(
			"SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';"
		)
		.get();
	if (!table['count(*)']) {
		// If the table isn't there, create it and setup the database correctly.
		sql
			.prepare(
				'CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, username TEXT, guild TEXT, points INTEGER, reputation INTEGER);'
			)
			.run();
		// Ensure that the "id" row is always unique and indexed.
		sql
			.prepare('CREATE UNIQUE INDEX idx_scores_id ON scores (id);')
			.run();
		sql.pragma('synchronous = 1');
		sql.pragma('journal_mode = wal');
	}

	// And then we have two prepared statements to get and set the score data.
	bot.getScore = sql.prepare(
		'SELECT * FROM scores WHERE user = ? AND guild = ?;'
	);
	bot.setScore = sql.prepare(
		'INSERT OR REPLACE INTO scores (id, user, username, guild, points, reputation) VALUES (@id, @user, @username, @guild, @points, @reputation);'
	);
	bot.setTopScore = sql.prepare(
		'SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;'
	);

	// pm2 start . --watch --name "Discord Bot"
	const profileTable = profilesql
		.prepare(
			"SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'profile';"
		)
		.get();
	//
	if (!profileTable[`count(*)`]) {
		// If the table isn't there, create it and setup the database correctly.
		profilesql
			.prepare(
				'CREATE TABLE profile (id TEXT PRIMARY KEY, user TEXT, message TEXT, pictureurl TEXT);'
			)
			.run();
		// Ensure that the "id" row is always unique and indexed.
		profilesql
			.prepare('CREATE UNIQUE INDEX idx_profile_id ON profile(id);')
			.run();
		profilesql.pragma('synchronous = 1');
		profilesql.pragma('journal_mode = wal');
	}
	bot.getProfile = profilesql.prepare(
		'SELECT * FROM profile WHERE id = ?;'
	);
	bot.updateProfile = profilesql.prepare(
		`UPDATE profile SET (message, pictureurl) = (@message, @pictureurl) WHERE id = ?;`
	);
	bot.setProfile = profilesql.prepare(
		'INSERT OR REPLACE INTO profile (id, user, message, pictureurl) VALUES (@id, @user, @message, @pictureurl);'
	);
	bot.setBadges = profilesql.prepare(
		`UPDATE profile SET badge1 = @badge1 WHERE id = ?;`
	);
	//
	const aight = guildsql
		.prepare(
			"SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'guilds';"
		)
		.get();
	if (!aight['count(*)']) {
		// If the table isn't there, create it and setup the database correctly.
		guildsql
			.prepare(
				'CREATE TABLE guilds (id TEXT PRIMARY KEY, tags1 TEXT, tags2 TEXT, general TEXT, report TEXT, showmemberjoin INTEGER);'
			)
			.run();
		// Ensure that the "id" row is always unique and indexed.
		guildsql
			.prepare('CREATE UNIQUE INDEX idx_guilds_id ON guilds(id);')
			.run();
		guildsql.pragma('synchronous = 1');
		guildsql.pragma('journal_mode = wal');
	}

	// And then we have two prepared statements to get and set the score data.
	bot.getGuild = guildsql.prepare(
		'SELECT * FROM guilds WHERE id = ?;'
	);
	bot.sMemberjoin = guildsql.prepare(
		`UPDATE guilds SET showmemberjoin = @showmemberjoin WHERE id = ?;`
	);
	bot.setGuild = guildsql.prepare(
		'INSERT INTO guilds (id, tags1, tags2, general, report, showmemberjoin) VALUES (@id, @tags1, @tags2, @general, @report, @showmemberjoin);'
	);
	bot.replaceGuild = guildsql.prepare(
		'REPLACE INTO guilds (id, tags1, tags2, general, report, showmemberjoin) VALUES (@id, @tags1, @tags2, @general, @report, @showmemberjoin);'
	);

	//
	// Playing functions
	setInterval(function() {
		let status =
			statuses[Math.floor(Math.random() * statuses.length)];
		bot.user.setStatus('online');
		bot.user.setActivity(status, {
			type: 'PLAYING'
		}); // what is it doin? Easy answer
	}, 60000);
	// every minute we'll change our status or the strings I used earlier to a random one.

	// our status will always be playing and we'll have a green icon next to your name for forever

	/*
      
      // * //-// * //
      hey.
      how ya doin?
      
      still hanging in there?
      
      */

	// this is some code I just wanted to crack myself up with, but the last line is actually useful for me.
	console.log('  ############');
	console.log(
		' ##############        #####          ####          ####     #####              ##############'
	);
	console.log(
		'######      #####      #########      ####          ####     #########         #################'
	);
	console.log(
		'#####        ####      ###########    ####          ####     ####  #####      ######        #####'
	);
	console.log(
		'#####        ####      ####  #####    ####          ####     ####  #####      ######          #####'
	);
	console.log(
		'#####        ####      ####   ####    ####          ####     ####  #####      ####          #######'
	);
	console.log(
		'#####        ####      ####   ####    ####          ####     ####  #####      ####################'
	);
	console.log(
		'#####        ####      ####   ####    ####          ####     ####  #####       ##################'
	);
	console.log(
		' ###############       ####   ####    ####          ####     ####  #####        ####### '
	);
	console.log(
		'  #############        ####   ####    ###########   ####     ####  #####         ###################'
	);
	console.log(
		'     ######            ####   ####    ###########   ####     ####  #####           ################'
	);
	console.log(
		`${bot.user.username} is online on ${bot.guilds.size} servers!, serving ${bot.users.size} users in ${bot.channels.size} channels!`
	);
	// tells some info about the bot
	// cool way to say onlineee

	//
};
