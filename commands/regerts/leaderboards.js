const Discord = require('discord.js'),
      arraySort = require('array-sort'),
      table = require("table");

//now lets gett the async bloock!!!
module.exports = {
    name: "leaderboard",
    aliases: ["Leaderboard", "LB", "LeaderBoard"],
    description: "8Ball for luck and fun!",
    catergory: "Fun",
    usage: "Question",
    run: async (bot, message, args) => {
    //let get dem INVITES!
    let invites = await message.guild.fetchInvites().catch(error => {
        
        return message.channel.send("sorry but you can not respect whamen.")
        return message.channel.send("[sorry can not have dem permissisons to view dem invites doe], WHAMMEN")
    })
    invites = invites.array();
    
    //now using arraySort, we can start the arrray!
    arraySort(invites, 'uses', { resverse: false});
    
    //nect we need to go through and get dem invites!
    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
        possibleInvites.push([invite.inviter, invite.uses]);
    })
    
    //let make a cool lokking embed dude!
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Server Invites')
    .addField('leaderboard', `${table.table(possibleInvites)}`);

//lets send it bois!
message.channel.send(embed)
    
    
    }
}