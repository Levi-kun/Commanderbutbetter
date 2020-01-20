const Discord = require("discord.js");
const SQLite = require('better-sqlite3');
const sql = new SQLite('./score.sqlite');

module.exports = bot => {
    let statuses = ['Prefix: ?', 'Owner Levi', 'Join support', 'discord.gg/eeKFnjV'] // some strings that we'll use later

        /*
      
        the line above tells the even that is taking place, which is on ready or when we first boot up the bot
      
        or more simply
      
        what the code will first do after we do node .
      
        */

        //
        ;['command'].forEach(handler => {
            require(`../handlers/${handler}`)(bot)
          })

        const table = sql
            .prepare(
                "SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';"
            )
            .get()
        if (!table['count(*)']) {
            // If the table isn't there, create it and setup the database correctly.
            sql.prepare(
                'CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, reputation INTEGER);'
            )
                .run()
            // Ensure that the "id" row is always unique and indexed.
            sql.prepare('CREATE UNIQUE INDEX idx_scores_id ON scores (id);').run()
            sql.pragma('synchronous = 1')
            sql.pragma('journal_mode = wal')
        }

        // And then we have two prepared statements to get and set the score data.
        bot.getScore = sql.prepare(
            'SELECT * FROM scores WHERE user = ? AND guild = ?'
        )
        bot.setScore = sql.prepare(
            'INSERT OR REPLACE INTO scores (id, user, guild, points, reputation) VALUES (@id, @user, @guild, @points, @reputation);'
        )

        //



        //
        // Playing functions
        setInterval(function () {
            let status = statuses[Math.floor(Math.random() * statuses.length)]
            bot.user.setStatus('online')
            bot.user.setActivity(status, {
                type: 'PLAYING'
            }) // what is it doin? Easy answer
        }, 60000)
        // every minute we'll change our status or the strings I used earlier to a random one.

        // our status will always be playing and we'll have a green icon next to your name for forever

        /*
      
      // * //-// * //
      hey.
      how ya doin?
      
      still hanging in there?
      
      */

        // this is some code I just wanted to crack myself up with, but the last line is actually useful for me.
        console.log('  ############')
        console.log(
            ' ##############        #####          ####          ####     #####              ##############'
        )
        console.log(
            '######      #####      #########      ####          ####     #########         #################'
        )
        console.log(
            '#####        ####      ###########    ####          ####     ####  #####      ######        #####'
        )
        console.log(
            '#####        ####      ####  #####    ####          ####     ####  #####      ######          #####'
        )
        console.log(
            '#####        ####      ####   ####    ####          ####     ####  #####      ####          #######'
        )
        console.log(
            '#####        ####      ####   ####    ####          ####     ####  #####      ####################'
        )
        console.log(
            '#####        ####      ####   ####    ####          ####     ####  #####       ##################'
        )
        console.log(
            ' ###############       ####   ####    ####          ####     ####  #####        ####### '
        )
        console.log(
            '  #############        ####   ####    ###########   ####     ####  #####         ###################'
        )
        console.log(
            '     ######            ####   ####    ###########   ####     ####  #####           ################'
        )
        console.log(
            `${bot.user.username} is online on ${bot.guilds.size} servers!, serving ${
            bot.users.size
            } users in ${bot.channels.size} channels!`
        )
        // tells some info about the bot
        // cool way to say onlineee
    
    //
}