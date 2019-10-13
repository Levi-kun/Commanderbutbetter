const agree = "👍"
const disagree = "👎"

module.exports = {
    name: "vote",
    aliases: ["Vote", "VOTE"],
    description: "8Ball for luck and fun!",
    catergory: "Fun",
    usage: "Question",
    run: async (bot, message, args) => {
    let howlong = new Discord.RichEmbed()
    .setTitle(`For how long ${message.author.username}`);


    if(!args[0]) return message.channel.send(howlong);

    let vote = new Discord.RichEmbed()
    .setTitle(`Time to vote!`);

    let msg = await message.channel.send(vote);
    await msg.react(agree);
    await msg.react(disagree);
    
   let times = parseInt(`${args[0]}`) * 1000

const reactions = await msg.awaitReactions(reactions => reactions.emoji.name === agree || reactions.emoji.name === disagree, {time: times});

/*




*/

let regret = new Discord.RichEmbed()
.setTitle(`This is the results!`)
.addField(`${agree}:`, `${reactions.get(agree).count-1}`, true)
.addField(`${disagree}:`, `${reactions.get(disagree).count-1}`, true);

msg.channel.send(regret).catch(error => {

    message.channel.send(regret);

});

}

};