const agree = "👍"
const disagree = "👎"

module.exports = {
    name: "somecode",
    aliases: "techmeout",
    description: "8Ball for luck and fun!",
    catergory: "Fun",
    usage: "Question",
    run: (bot, message, args) => {
    

    let yougay = new Discord.RichEmbed()
    .setTitle("You gay!");
    message.channel.send(yougay);
   
    }
}